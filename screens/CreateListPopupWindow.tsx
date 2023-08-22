import { LinearGradient } from "expo-linear-gradient";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { View, Text, Modal, TextInput, Pressable } from "react-native";

interface PopupWindowProps {
  closePopup: () => void
}

export interface PopupWindowMethods {
  open: () => void
  close: () => void
}
const CreateListPopupWindow:React.ForwardRefRenderFunction<PopupWindowMethods, PopupWindowProps> = (props,ref) => {
  const prompt = "";

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
  props.closePopup()
}

  return (
    <Modal animationType="slide" transparent={false} visible={isOpen ? true : false}>
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
            />

            <View className="border w-[350px] flex flex-row items-center justify-end space-x-4 mx-2">
              <Pressable className="w-[90px] h-[40px] border bg-[#003366] rounded-md flex items-center justify-center">
                <Text className="text-white text-[20px]">Create</Text>
              </Pressable>    
              <Pressable className="w-[90px] h-[40px] border bg-transparent rounded-md flex items-center justify-center" onPress={handleInternalClose}>
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
