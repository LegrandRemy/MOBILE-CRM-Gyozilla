import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProducts from "../screen/ListProductsScreen";
import MenuList from "../screen/TapBar/MenuListScreen";
import ProductDetailsScreen from "../screen/ProductDetailsScreen";
import Cart from "../components/Cart";

const Stack = createNativeStackNavigator();

const StackRestaurantMenuNavigator = ({ route }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Menu" component={MenuList}></Stack.Screen>
      <Stack.Screen name="ListProducts" component={ListProducts}></Stack.Screen>
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      ></Stack.Screen>
      <Stack.Screen name="Cart" component={Cart}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackRestaurantMenuNavigator;
