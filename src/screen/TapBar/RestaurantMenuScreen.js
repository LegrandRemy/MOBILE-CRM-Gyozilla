import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import ListProductsScreen from "../ListProductsScreen";

const RestaurantMenu = () => {
  return (
    <View style={styles.container}>
      <ListProductsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default RestaurantMenu;
