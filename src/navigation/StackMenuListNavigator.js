import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Entrees from "../screen/Repas/Entrees";
import ContactezNousScreen from "../screen/ContactezNousScreen";
import MenuListScreen from "../screen/TapBar/MenuListScreen";
import MyAccount from "../screen/MonCompteScreen";
import Plats from "../screen/Repas/Plats";
import Desserts from "../screen/Repas/Desserts";
import Boissons from "../screen/Repas/Boissons";
import Menus from "../screen/Repas/Menus";
import Nouveautes from "../screen/Repas/Nouveautes";
import ListProductsScreen from "../screen/ListProductsScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MenuList" component={MenuListScreen}></Stack.Screen>
      <Stack.Screen name="MyAccount" component={MyAccount}></Stack.Screen>
      <Stack.Screen
        name="ListProductsScreen"
        component={ListProductsScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Contactez-nous"
        component={ContactezNousScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
