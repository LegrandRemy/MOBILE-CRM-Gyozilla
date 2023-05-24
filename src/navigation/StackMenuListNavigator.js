import { View, Text } from "react-native";
import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContactezNousScreen from "../screen/ContactezNousScreen";
import MenuListScreen from "../screen/TapBar/MenuListScreen";
import MyAccount from "../screen/MonCompteScreen";
import ListProductsScreen from "../screen/ListProductsScreen";
import Engagements from "../screen/NosEngagements";

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
      <Stack.Screen name="Engagements" component={Engagements}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
