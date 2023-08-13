import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogInScreen from "../screens/LogInScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamlist = {
  LogIn: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamlist>();

const StackNavigator = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <Stack.Navigator initialRouteName="LogIn">
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </ClerkProvider>
  );
};
export default StackNavigator;
