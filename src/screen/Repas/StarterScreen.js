import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { instanceAxios } from "../../utils/interceptor";
import { Image } from "native-base";

const Starter = () => {
  const [productsEntrees, setProductsEntrees] = useState([]);

  useEffect(() => {
    instanceAxios
      .get("/products")
      .then((response) => {
        console.log("response", response.data);
        const filteredProducts = response.data.filter(
          (product) => product.productCategory.name === "Entrées"
        );
        setProductsEntrees(filteredProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text>
          Savourez nos meilleurs plats avec un accompagnement au choix et une
          boisson!
        </Text>
      </View>
      <View style={styles.row}>
        {productsEntrees.map((productEntree) => (
          <View style={styles.carte} key={productEntree.id}>
            <Text style={styles.titre}>{productEntree.name}</Text>
            <Text style={styles.contenu}>{productEntree.description}</Text>
            <Image
              alt="photo d'une entrée"
              source={{ uri: `../../../assets/${productEntree.image}` }}
              style={styles.image}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

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
  carte: {
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
    alignSelf: "center",
  },
});

export default Starter;
