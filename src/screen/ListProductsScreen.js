import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { instanceAxios } from "../utils/interceptor";
import { ScrollView } from "native-base";

const checkNew = (item) => {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);
  return (
    new Date(item.createdAt) >= lastWeek && new Date(item.createdAt) <= today
  );
};

const ListProductsScreen = ({ route }) => {
  const [products, setProducts] = useState([]);
  const [choiceMenus, setChoiceMenus] = useState([]);

  const { name } = route.params;

  useEffect(() => {
    instanceAxios
      .get("/products")
      .then((response) => {
        let filteredProducts = [];
        switch (name) {
          case "News":
            filteredProducts = response.data.filter(checkNew);
            break;
          case "Menus":
            filteredProducts = response.data.filter((product) => product.menu);
            break;
          case "Starter":
            filteredProducts = response.data.filter(
              (product) => product.productCategory.name === "Entrées"
            );
            break;
          case "Dishes":
            filteredProducts = response.data.filter(
              (product) => product.productCategory.name === "Plats"
            );
            break;
          case "Desserts":
            filteredProducts = response.data.filter(
              (product) => product.productCategory.name === "Desserts"
            );
            break;
          case "Drinks":
            filteredProducts = response.data.filter(
              (product) => product.productCategory.name === "Boissons"
            );
            break;
        }
        console.log("filteredProducts", filteredProducts);
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
        <Text>
          Savourez nos meilleurs plats avec un accompagnement au choix et une
          boisson!
        </Text>
      </View>
      {
        (name = "Menus" ? (
          <View>
            <Text>coucou</Text>
          </View>
        ) : (
          <View style={styles.row}>
            {products.map((product) => (
              <View style={styles.carte} key={product.id}>
                <View style={styles.cardText}>
                  <Text style={styles.titre}>{product.name}</Text>
                  <Text style={styles.contenu}>{product.description}</Text>
                </View>
                <View style={styles.cardImage}>
                  <Image
                    alt="photo d'une entrée"
                    source={{
                      uri: `https://api-gyozilla.onrender.com/${product.image}`,
                    }}
                    style={styles.image}
                  />
                </View>
              </View>
            ))}
          </View>
        ))
      }
    </ScrollView>
  );
};
export default ListProductsScreen;

const styles = StyleSheet.create({
  intro: {
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
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
