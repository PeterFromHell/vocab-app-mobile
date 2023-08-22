import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Text, View } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../hooks/useWarmUpBrowser";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        // @ts-ignore
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View className="w-[300px] h-[60px] border border-white rounded-xl bg-[#CC99FF] flex items-center justify-center">
      <Text className="text-[#000000] text-[30px]" onPress={() => onPress()}>
        Log in to Get Started
      </Text>
    </View>
  );
};
export default SignInWithOAuth;
