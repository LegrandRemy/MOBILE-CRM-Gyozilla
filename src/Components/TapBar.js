import { StyleSheet, View, ScrollView, Text } from "react-native";
import * as React from "react";
import Home from "../screen/TapBar/HomeScreen";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantMenu from "../screen/TapBar/RestaurantMenuScreen";
import Geoloc from "../screen/TapBar/GeolocScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackMenuListNavigator from "../navigation/StackMenuListNavigator";
import Header from "../templates/header/Header";
import StackNewsNavigator from "../navigation/StackNewsNavigator";

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
              newColor = "#faeccb";
            } else {
              iconName = "home";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "La carte") {
            if (focused) {
              iconName = "noodles";
              newSize = 35;
              newColor = "#faeccb";
            } else {
              iconName = "noodles";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "GeoLoc") {
            if (focused) {
              iconName = "map-marker-multiple-outline";
              newSize = 35;
              newColor = "#faeccb";
            } else {
              iconName = "map-marker-multiple";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "Menu") {
            if (focused) {
              iconName = "format-list-bulleted";
              newSize = 35;
              newColor = "#faeccb";
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
        tabBarActiveTintColor: "#faeccb",
        tabBarInactiveTintColor: "black",
        tabBarActiveBackgroundColor: "#77614c",
        tabBarInactiveBackgroundColor: "#77614c",
      })}
    >
      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={StackNewsNavigator}
        name="Accueil"
      />
      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={RestaurantMenu}
        name="La carte"
      />
      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={Geoloc}
        name="GeoLoc"
      />
      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={StackMenuListNavigator}
        name="Menu"
      />
    </Tab.Navigator>
  );
};
