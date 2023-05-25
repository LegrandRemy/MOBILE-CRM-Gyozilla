import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";

const CustomCardItem = ({ product, smallCard }) => {
  //const { id, name, description, categorie } = props.data.item;
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity onPress={() => handleProductClick(product.id)}>
        <Box
          style={[styles.carte, smallCard && styles.smallCarte]}
          key={product.id}
        >
          <View style={styles.cardText}>
            <Text style={styles.titre}>{product.name}</Text>
            <Text style={styles.contenu}>{product.description}</Text>
          </View>
          <View style={styles.cardImage}>
            <Image
              alt="photo d'un plat"
              source={{
                uri: `https://api-gyozilla.onrender.com/${product.image}`,
              }}
              style={styles.image}
            />
          </View>
        </Box>
      </TouchableOpacity>
    </>
  );
};

export default CustomCardItem;

const styles = StyleSheet.create({
  intro: {
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  smallCarte: {
    width: "30%", // Ajustez la largeur en fonction de vos besoins
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cardText: { flex: 1 },
  cardImage: {
    flex: 2,
  },
  carte: {
    width: 350,
    height: 250,
    backgroundColor: "white",
    padding: 1,
    margin: 6,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  titre: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contenu: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
