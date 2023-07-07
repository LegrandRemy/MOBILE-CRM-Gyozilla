import React, { useState } from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ContactUs from "../screen/ContactUsScreen";
import MenuList from "../screen/TapBar/MenuListScreen";
import MyAccount from "../screen/MyAccountScreen";
import ListProducts from "../screen/ListProductsScreen";
import Engagements from "../screen/EngagementsScreen";
import ProductDetails from "../screen/ProductDetailsScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen
        name="MenuList"
        options={(statusBarTranslucent = true)}
        component={MenuList}
      ></Stack.Screen>
      <Stack.Screen name="MyAccount" component={MyAccount}></Stack.Screen>
      <Stack.Screen name="ListProducts" component={ListProducts}></Stack.Screen>
      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetails}
      ></Stack.Screen>
      <Stack.Screen name="Contactez-nous" component={ContactUs}></Stack.Screen>
      <Stack.Screen name="Engagements" component={Engagements}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
