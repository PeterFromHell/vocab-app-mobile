import { useAuth, useUser } from "@clerk/clerk-expo";
import NewList from "./NewList";
import { LinearGradient } from "expo-linear-gradient";

import React, { useRef, useState } from "react";
import { View, Text } from "react-native";
import CreateListPopupWindow, {PopupWindowMethods} from "./CreateListPopupWindow";

const HomeScreen = () => {
  const { user } = useUser();

  const popupRef = useRef<PopupWindowMethods | null>(null);
  const openPopup = () => {
    if (popupRef.current) {
      popupRef.current.open();
    }
  };
  const closePopup = () => {
    if (popupRef.current) {
      popupRef.current.close();
    }
  };

  const openPopupWindow = () => {
    openPopup();
  };

  return (
    <LinearGradient
      colors={["#003366", "#66CCFF"]}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <Text className="text-[#B7C6D4] text-[100px] absolute top-0">Vocabs</Text>
      <CreateListPopupWindow ref={popupRef as React.RefObject<PopupWindowMethods>} closePopup={closePopup} />
      <NewList handleClick={openPopupWindow} />
    </LinearGradient>
  );
};
export default HomeScreen;
