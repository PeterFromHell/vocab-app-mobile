import { useUser } from "@clerk/clerk-expo";
import { LinearGradient } from "expo-linear-gradient";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, Text, Modal, TextInput, Pressable } from "react-native";
import { List } from "../typings";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

interface PopupWindowProps {
  closePopup: () => void;
  navigation: any;
}

export interface PopupWindowMethods {
  open: () => void;
  close: () => void;
}
const CreateListPopupWindow: React.ForwardRefRenderFunction<
  PopupWindowMethods,
  PopupWindowProps
> = (props, ref) => {
  const [prompt, setPrompt] = useState<string>("");
  const [submittedValue, setSubmittedValue] = useState("");
  const { user } = useUser();

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  useImperativeHandle(ref, () => ({
    open,
    close,
  }));

  const handleInternalClose = () => {
    props.closePopup();
  };
  const handleSubmit = async () => {
    setSubmittedValue(prompt);
    setPrompt("");
    props.closePopup();

    const list: List = {
      name: prompt.trim(),
      createdAt: serverTimestamp(),
      user: {
        _id: user?.primaryEmailAddress!.toString()!,
        name: user?.username!,
        avatar:
          user?.imageUrl ||
          `https://ui-avatars.com/api/?name=${user?.username}`,
      },
    };

    const doc = await addDoc(
      collection(db, "users", user?.primaryEmailAddress?.toString()!, "lists"),
      list
    );
    props.navigation.navigate("List", { list: prompt });
  };

  const handleInputChange = (text: string) => {
    setPrompt(text);
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={isOpen ? true : false}
    >
      <LinearGradient
        colors={["#003366", "#66CCFF"]}
        className="w-full h-full flex items-center justify-center"
      >
        <View className="bg-white w-[375px] h-[667px] p-[20px] rounded-[10px] overflow-y-auto shadow-md flex items-center justify-center">
          <View className="w-[360px] h-[200px] space-y-3">
            <Text className="color-[#003366] text-[30px]">
              Create Your New List:
            </Text>
            <TextInput
              className="w-[350px] h-[50px] border-[#CCCCCC] border-[1px] rounded-md placeholder-[#000000]"
              placeholder="List Name"
              value={prompt}
              onChangeText={handleInputChange}
            />

            <View className="flex flex-row items-center justify-end space-x-4 mx-2">
              <Pressable
                className="w-[90px] h-[40px] border bg-[#003366] rounded-md flex items-center justify-center"
                onPress={handleSubmit}
              >
                <Text className="text-white text-[20px]">Create</Text>
              </Pressable>
              <Pressable
                className="w-[90px] h-[40px] border bg-transparent rounded-md flex items-center justify-center"
                onPress={handleInternalClose}
              >
                <Text className="text-[#003366] text-[20px]">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default forwardRef(CreateListPopupWindow);
