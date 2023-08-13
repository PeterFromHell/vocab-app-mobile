import { useAuth, useUser } from "@clerk/clerk-expo";
import NewList from "./NewList";
import { LinearGradient } from "expo-linear-gradient";

import React, {useState} from "react";
import { View, Text } from "react-native";
import CreateListPopupWindow from "./CreateListPopupWindow";

const HomeScreen = () => {
  const { user } = useUser();
  const [ isPopup, setIsPopup ] = React.useState<boolean>(false)

  const popupWindow = () => {
    setIsPopup(true)
  }

  return (
    <LinearGradient
      colors={['#003366', '#66CCFF']}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <Text className="text-[#B7C6D4] text-[100px] absolute top-0">Vocabs</Text>
      <CreateListPopupWindow handleCond={isPopup}/>
      <NewList handleClick={popupWindow}/>
    </LinearGradient>    
  );
};
export default HomeScreen;
