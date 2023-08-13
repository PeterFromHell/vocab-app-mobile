import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import SignInWithOAuth from "./SignInWithOAuth";
import { useNavigation } from "@react-navigation/native";
import { Image } from "expo-image";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../components/StackNavigator";

type logincreenProp = NativeStackNavigationProp<RootStackParamlist, 'LogIn'>


const LogInScreen = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  const navigation = useNavigation<logincreenProp>();
  

  return (
    <SafeAreaView>
      <SignedIn>
        <SafeAreaView className="bg-[#34353F] w-full h-full flex flex-col items-center justify-center space-y-7">
          <Text className="text-[#B3C7D6] text-[25px] font-bold ">
            Welcome {user?.fullName}, you are signed in!
          </Text>

          <Pressable
            onPress={() => navigation.navigate("Home")}
            className="bg-[#98FF98] border rounded-xl w-[400px] h-[60px] flex items-center justify-center"
          >
            <Text className="text-center text-[35px]">Get Started!!</Text>
          </Pressable>

          <Pressable
            className="absolute bottom-[10px] w-[60px] h-[60px]"
            onPress={() => signOut()}
          >
            <Image
              className="rounded-full border-white w-[60px] h-[60px]"
              source={user?.imageUrl}
              placeholder="Log Out"
            />
          </Pressable>
        </SafeAreaView>
      </SignedIn>
      <SignedOut>
        <SafeAreaView className="bg-[#34353F] w-screen h-screen flex flex-col items-center justify-center hover:opacity-50">
          <Text className="text-[#B3C7D6] text-[60px]">Vocab App</Text>
          <SignInWithOAuth />
        </SafeAreaView>
      </SignedOut>
    </SafeAreaView>
  );
};
export default LogInScreen;
