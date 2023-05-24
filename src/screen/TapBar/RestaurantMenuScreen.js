import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RestaurantMenu = () => {
  const menuData = [
    {
      id: 1,
      name: "Whopper",
      description:
        "Délicieux hamburger avec du fromage, de la salade et de la sauce",
      image: require("../../../assets/1.jpg"),
    },
    {
      id: 2,
      name: "Chicken Royale",
      description: "Sandwich de poulet croustillant avec de la mayonnaise",
      image: require("../../../assets/2.jpg"),
    },
  ];

  // Rendu de chaque élément de menu
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemContent}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  itemContent: {
    marginLeft: 12,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  itemDescription: {
    fontSize: 14,
    marginTop: 4,
  },
});

export default RestaurantMenu;
