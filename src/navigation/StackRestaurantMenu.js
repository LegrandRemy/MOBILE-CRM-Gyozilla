import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListProducts from "../screen/ListProductsScreen";
import MenuList from "../screen/TapBar/MenuListScreen";
import ProductDetailsScreen from "../screen/ProductDetailsScreen";
import Cart from "../components/Cart";
import CustomCardDetailsProduct from "../components/CustomCardDetailsProduct";
import LoginRegister from "../screen/LoginRegister";
import BottomNav from "../components/TapBar";

const Stack = createNativeStackNavigator();

const StackRestaurantMenuNavigator = ({ route }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Menu" component={MenuList}></Stack.Screen>
      <Stack.Screen name="ListProducts" component={ListProducts}></Stack.Screen>
      <Stack.Screen
        name="CustomCardDetailsProduct"
        component={CustomCardDetailsProduct}
      ></Stack.Screen>
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      ></Stack.Screen>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="LoginRegisterScreen"
        component={LoginRegister}
        options={() => ({
          title: "Page d'inscription / connexion",
        })}
      ></Stack.Screen>
      <Stack.Screen name="Main" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default StackRestaurantMenuNavigator;
