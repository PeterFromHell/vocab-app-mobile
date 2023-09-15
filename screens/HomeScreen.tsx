import { useAuth, useUser } from "@clerk/clerk-expo";
import NewList from "./NewList";
import { LinearGradient } from "expo-linear-gradient";

import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import CreateListPopupWindow, {
  PopupWindowMethods,
} from "./CreateListPopupWindow";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../components/StackNavigator";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ListCard from "./ListCard";

type homeScreenProp = NativeStackNavigationProp<RootStackParamlist, "Home">;

const HomeScreen = () => {
  const { user } = useUser();
  const navigation = useNavigation<homeScreenProp>();
  const [lists, loading] = useCollection(
    user &&
      query(
        collection(db, "users", user.primaryEmailAddress?.toString()!, "lists"),
        orderBy("createdAt", "asc")
      )
  );

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
      className="w-full h-full flex flex-col items-center justify-center overflow-scroll"
    >
        <View className="absolute top-0">
          <Text className="text-[#B7C6D4] text-[100px] text-center">Vocabs</Text>
        </View>
        <View className="w-[400px] absolute top-[150px] flex flex-col items-center justify-center overflow-scroll">
          {lists?.docs.map((list) => (
            <ListCard key={list.id} id={list.id} list={list.data()}/>
          ))}
        </View>
      <CreateListPopupWindow
        ref={popupRef as React.RefObject<PopupWindowMethods>}
        closePopup={closePopup}
        navigation={navigation}
      />
      <NewList handleClick={openPopupWindow} />
    </LinearGradient>
  );
};
export default HomeScreen;
