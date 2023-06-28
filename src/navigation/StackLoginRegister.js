import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LoginRegister from "../screen/LoginRegister";

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
    </Stack.Navigator>
  );
};

export default StackLoginRegister;
