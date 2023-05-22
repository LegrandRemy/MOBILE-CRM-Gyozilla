import { StyleSheet, View, ScrollView, Text } from "react-native";
import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "../screen/Home";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LaCarte from "../screen/LaCarte";
import NosEngagements from "../screen/NosEngagements";
import ContactezNous from "../screen/ContactezNous";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      shifting={true}
      sceneAnimationEnabled={false}
      screenOptions={({ route }) => ({
        // header: ({ options }) => {
        //   return <Header title={route.name} />;
        // },

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
              iconName = "book-open-page-variant-outline";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "book-open-page-variant";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "Nos Engagements") {
            if (focused) {
              iconName = "hammer";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "hand-saw";
              newSize = 25;
              newColor = "black";
            }
          } else if (route.name === "Contactez-nous") {
            if (focused) {
              iconName = "card-account-mail-outline";
              newSize = 35;
              newColor = "#F8A500";
            } else {
              iconName = "card-account-mail";
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
      <Tab.Screen component={Home} name="Accueil" />
      <Tab.Screen component={LaCarte} name="La carte" />
      <Tab.Screen component={NosEngagements} name="Nos Engagements" />
      <Tab.Screen component={ContactezNous} name="Contactez-nous" />
    </Tab.Navigator>
  );
};
