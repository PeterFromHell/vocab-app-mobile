import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackNavigator from "./components/StackNavigator";
import { NativeWindStyleSheet } from "nativewind";

NativeWindStyleSheet.setOutput({
  default: 'native'
})

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};
export default App;
