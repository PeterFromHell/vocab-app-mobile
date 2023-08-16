import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { View, Text, Modal, TextInput, Pressable } from "react-native";

type Props = {
  handleCond: boolean;
};

const CreateListPopupWindow: React.FC<Props> = ({ handleCond }: Props) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(handleCond);
  const [prompt, setPrompt] = React.useState<string>("");
  console.log(isVisible);
  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
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

            <View className="flex flex-row items-center justify-end space-x-2 mx-2">
              <Pressable className="w-[90px] h-[40px] border bg-[#003366] rounded-md flex items-center justify-center">
                <Text className="text-white text-[20px]">Create</Text>
              </Pressable>
              <Pressable className="w-[90px] h-[40px] border bg-transparent rounded-md flex items-center justify-center">
                <Text className="text-[#003366] text-[20px]">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default CreateListPopupWindow;
