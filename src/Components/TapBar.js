import { StyleSheet, View, ScrollView, Text } from "react-native";
import * as React from "react";
import HomeScreen from "../screen/TapBar/HomeScreen";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LaCarteScreen from "../screen/TapBar/LaCarteScreen";
import GeolocScreen from "../screen/TapBar/GeolocScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackMenuListNavigator from "../navigation/StackMenuListNavigator";

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
      <Tab.Screen component={HomeScreen} name="Accueil" />
      <Tab.Screen component={LaCarteScreen} name="La carte" />
      <Tab.Screen component={GeolocScreen} name="GeoLoc" />
      <Tab.Screen
        options={{ headerShown: false }}
        component={StackMenuListNavigator}
        name="Menu"
      />
    </Tab.Navigator>
  );
};
