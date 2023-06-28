import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProducts from "../screen/ListProductsScreen";
import MenuList from "../screen/TapBar/MenuListScreen";

const Stack = createNativeStackNavigator();

const StackRestaurantMenuNavigator = ({ route }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Menu" component={MenuList}></Stack.Screen>
      <Stack.Screen name="ListProducts" component={ListProducts}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackRestaurantMenuNavigator;
