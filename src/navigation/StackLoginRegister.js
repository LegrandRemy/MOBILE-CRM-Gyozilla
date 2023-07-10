import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginRegister from "../screen/LoginRegister";
import Cart from "../components/Cart";
import BottomNav from "../components/TapBar";

const StackLoginRegister = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginRegisterScreen"
        component={LoginRegister}
        options={() => ({
          title: "Page d'inscription / connexion",
        })}
      ></Stack.Screen>
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen name="Main" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default StackLoginRegister;
