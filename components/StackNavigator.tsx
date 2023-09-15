import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LogInScreen from "../screens/LogInScreen";
import { ClerkProvider } from "@clerk/clerk-expo";
import HomeScreen from "../screens/HomeScreen";
import ListScreen from "../screens/ListScreen";

export type RootStackParamlist = {
  LogIn: undefined;
  Home: undefined;
  List: { list: string };
};

const Stack = createNativeStackNavigator<RootStackParamlist>();

const StackNavigator = () => {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <Stack.Navigator
       initialRouteName="LogIn"
       screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </ClerkProvider>
  );
};
export default StackNavigator;
