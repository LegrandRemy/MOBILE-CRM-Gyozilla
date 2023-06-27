import React, { useState } from "react";
import { View } from "react-native";
import { List, Divider, Collapse, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MenuList = () => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState("");

  const handleMenuItemPress = (screenName, data) => {
    console.log("handleMenuItemPress", screenName);
    navigation.navigate(screenName, data);
  };

  const handleAccordion = (accordionId) => {
    setExpanded(expanded === accordionId ? "" : accordionId);
  };

  return (
    <View>
      <List.Accordion
        title="Mon compte"
        expanded={expanded === "monCompte"}
        onPress={() => handleAccordion("monCompte")}
        style={{ backgroundColor: "#eaeaea", color: "#F8A500" }}
      >
        <List.Item
          title="Mon profil"
          onPress={() => handleMenuItemPress("MyAccount")}
          style={{ backgroundColor: "#eaeaea", color: "#F8A500" }}
        />
        <List.Item
          title="Ma fidélité"
          onPress={() => handleMenuItemPress("MyFidelity")}
        />
        <List.Item
          title="Mes commandes"
          onPress={() => handleMenuItemPress("Myorders")}
        />
      </List.Accordion>

      <Divider />

      <List.Accordion
        title="La carte"
        expanded={expanded === "RestaurantMenu"}
        onPress={() => handleAccordion("RestaurantMenu")}
        style={{ backgroundColor: "#eaeaea" }}
      >
        <List.Item
          title="Nouveautés"
          onPress={() => handleMenuItemPress("ListProducts", { name: "News" })}
        />
        <List.Item
          title="Menus"
          onPress={() =>
            handleMenuItemPress("ListProducts", {
              name: "Menus",
              title: "MENU",
            })
          }
        />
        <List.Item
          title="Entrées"
          onPress={() =>
            handleMenuItemPress("ListProducts", {
              name: "Starter",
              title: "ENTREES",
            })
          }
        />
        <List.Item
          title="Plats"
          onPress={() =>
            handleMenuItemPress("ListProducts", {
              name: "Dishes",
              title: "PLATS",
            })
          }
        />
        <List.Item
          title="Desserts"
          onPress={() =>
            handleMenuItemPress("ListProducts", {
              name: "Desserts",
              title: "DESSERTS",
            })
          }
        />
        <List.Item
          title="Boissons"
          onPress={() =>
            handleMenuItemPress("ListProducts", {
              name: "Drinks",
              title: "BOISSONS",
            })
          }
        />
      </List.Accordion>
      
      <Divider />

      <List.Item
        title="Contactez-nous"
        onPress={() => handleMenuItemPress("Contactez-nous")}
        style={{ backgroundColor: "#eaeaea" }}
      />
      <List.Item
        title="Nos engagements"
        onPress={() => handleMenuItemPress("Engagements")}
        style={{ backgroundColor: "#eaeaea" }}
      />

    </View>
  );
};

export default MenuList;
