import { StyleSheet, View, ScrollView, Text } from "react-native";
import * as React from "react";
import Home from "../screen/Home";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LaCarte from "../screen/LaCarte";
import GeoLoc from "../screen/Geoloc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackMenuListNavigator from "../navigation/StackMenuListNavigator";
import Header from "../templates/header/Header";

const Tab = createBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      shifting={true}
      sceneAnimationEnabled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let newSize;
          let newColor;
          if (route.name === "Accueil") {
            if (focused) {
              iconName = "home-outline";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "home";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "La carte") {
            if (focused) {
              iconName = "noodles";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "noodles";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "GeoLoc") {
            if (focused) {
              iconName = "map-marker-multiple-outline";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "map-marker-multiple";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "Menu") {
            if (focused) {
              iconName = "format-list-bulleted";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "format-list-bulleted";
              newSize = 25;
              newColor = "black";
            }
          }

          // You can return any component that you like here!
          return (
            <MaterialCommunityIcons
              name={iconName}
              size={newSize}
              color={newColor}
            />
          );
        },
        tabBarActiveTintColor: "#F8A500",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen options={{header: ()=><Header/>}} component={Home} name="Accueil" />
      <Tab.Screen options={{header: ()=><Header/>}} component={LaCarte} name="La carte" />
      <Tab.Screen options={{header: ()=><Header/>}} component={GeoLoc} name="GeoLoc" />
      <Tab.Screen options={{header: ()=><Header/>}} component={StackMenuListNavigator} name="Menu" />
    </Tab.Navigator>
  );
};
