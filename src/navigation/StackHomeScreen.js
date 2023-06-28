<<<<<<< HEAD:src/navigation/StackNewsNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OneNews from "../screen/OneNews";
import Home from "../screen/TapBar/HomeScreen";
import LastProductsHome from "../screen/LastProductsHome";

const Stack = createStackNavigator();

const StackNewsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="OneNews"
        component={OneNews}
        options={({ route }) => ({
          title: `OneNews ${route.params?.id}`,
        })}
      />
      <Stack.Screen
        name="LastProduct"
        component={LastProductsHome}
        options={({ route }) => ({
          title: `LastProduct ${route.params?.id}`,
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNewsNavigator;
=======
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screen/TapBar/HomeScreen';
import LastProductsHome from '../screen/LastProductsHome';
import OneNews from '../screen/OneNews';



const Stack = createStackNavigator();
const StackHomeScreen = () => {
    return (
        <Stack.Navigator screenOptions={{header: ()=>null}}>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            />
            <Stack.Screen 
            name="OneNews" 
            component={OneNews} 
            options={({ route }) => ({
                title: `OneNews ${route.params?.id}`,
                })}
            />
            <Stack.Screen 
            name="LastProductsHome" 
            component={LastProductsHome} 
            options={({ route }) => ({
                title: `LastProductsHome ${route.params?.id}`,
                })}
            />
        </Stack.Navigator>
    )
}

export default StackHomeScreen
>>>>>>> 24aae98367d82394719deab770b1c23174faee48:src/navigation/StackHomeScreen.js
