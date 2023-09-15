import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamlist } from "../components/StackNavigator";

type listScreenProp = RouteProp<RootStackParamlist, "List">;

const ListScreen = () => {
  const route = useRoute<listScreenProp>();
  const { list } = route.params;
  return (
    <View>
      <Text>List Screen {list}</Text>
    </View>
  );
};

export default ListScreen;
