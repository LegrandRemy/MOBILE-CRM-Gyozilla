import * as React from "react";
import Home from "../screen/TapBar/HomeScreen";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import RestaurantMenu from "../screen/TapBar/RestaurantMenuScreen";
import Geoloc from "../screen/TapBar/GeolocScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackMenuListNavigator from "../navigation/StackMenuListNavigator";
import Header from "../templates/header/Header";
import MenuList from "../screen/TapBar/MenuListScreen";
import ListProductsScreen from "../screen/ListProductsScreen";
import StackRestaurantMenuNavigator from "../navigation/StackRestaurantMenu";
import StackNewsNavigator from "../navigation/StackNewsNavigator";
import StackHomeScreen from "../navigation/StackHomeScreen";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      shifting={true}
      sceneAnimationEnabled={false}
      screenOptions={({ route }) => ({
        // tabBarStyle: { height: 50 },
        // tabBarStyle: { paddingTop: 1, marginBottom: 5, paddingBottom: 5,  },
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
              newColor = "#5F8D85";
            }
          } else if (route.name === "La carte") {
            if (focused) {
              iconName = "noodles";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "noodles";
              newSize = 25;
              newColor = "#5F8D85";
            }
          } else if (route.name === "GeoLoc") {
            if (focused) {
              iconName = "map-marker-multiple-outline";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "map-marker-multiple";
              newSize = 25;
              newColor = "#5F8D85";
            }
          } else if (route.name === "Menu") {
            if (focused) {
              iconName = "format-list-bulleted";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "format-list-bulleted";
              newSize = 25;
              newColor = "#5F8D85";
            }
          }

          return (
            <MaterialCommunityIcons
              name={iconName}
              size={newSize}
              color={newColor}
            />
          );
        },
        tabBarActiveTintColor: "#F8A500",
        tabBarInactiveTintColor: "#5F8D85",
      })}
    >
      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={StackHomeScreen}
        name="Accueil"
      />

      <Tab.Screen
        options={{ header: () => <Header /> }}
        component={StackRestaurantMenuNavigator}
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

export default BottomNav;
