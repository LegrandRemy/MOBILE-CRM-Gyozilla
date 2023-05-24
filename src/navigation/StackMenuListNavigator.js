import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Entrees from "../screen/Plats/Entrees";
import ContactezNous from "../screen/ContactezNous";
import MenuList from "../screen/MenuList";
import MyAccount from "../screen/MonCompteScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuList" component={MenuList}></Stack.Screen>
      <Stack.Screen name="Entrees" component={Entrees}></Stack.Screen>
      <Stack.Screen name="MyAccount" component={MyAccount}></Stack.Screen>
      <Stack.Screen
        name="ContactezNous"
        component={ContactezNous}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
