import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Box, Heading, Stack } from "native-base";

const CustomCardProduct = ({ product, onClick, menu }) => {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={onClick}>
        <Box style={styles.card} key={product ? product.id : menu.id}>
          <Text style={styles.title}>{product ? product.name : menu.name}</Text>
          {/* <Text style={styles.contenu}>{product.description}</Text> */}
          <View style={styles.cardImage}>
            <Image
              alt="photo d'un plat"
              source={{
                uri: product
                  ? `https://api-gyozilla.onrender.com/${product.image}`
                  : `https://api-gyozilla.onrender.com/${menu.image}`,
              }}
              style={styles.image}
            />
          </View>
        </Box>
      </TouchableOpacity>
    </>
  );
};

export default CustomCardProduct;

const styles = StyleSheet.create({
  card: {
    width: 350,
    height: 150,
    backgroundColor: "white",
    padding: 1,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  cardImage: {
    flex: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: "80%",
    height: "80%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
