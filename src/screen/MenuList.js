import React, { useState } from "react";
import { View } from "react-native";
import { List, Divider, Collapse, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const MenuList = () => {
  const navigation = useNavigation();

  const [expanded, setExpanded] = useState("");

  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName);
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
      >
        <List.Item
          title="Mon profil"
          onPress={() => handleMenuItemPress("MyAccount")}
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
        expanded={expanded === "laCarte"}
        onPress={() => handleAccordion("laCarte")}
      >
        <List.Item
          title="Entrées"
          onPress={() => handleMenuItemPress("Entrees")}
        />
        <List.Item title="Plats" />
        <List.Item title="Desserts" />
      </List.Accordion>
      <View>
        <List.Item
          title="Contactez-nous"
          onPress={() => handleMenuItemPress("ContactezNous")}
        />
      </View>
    </View>
  );
};

export default MenuList;
