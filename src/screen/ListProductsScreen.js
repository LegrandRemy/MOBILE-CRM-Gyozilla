import { View, Text } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import { useNavigation } from "@react-navigation/native";
import Entrees from "./Repas/StarterScreen";

const ListProducts = ({ route }) => {
  console.log("route.params", route.params);

  const data = data;

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
    <View>
      {/* <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      /> */}
      <Entrees />
    </View>
  );
};

export default ListProducts;
