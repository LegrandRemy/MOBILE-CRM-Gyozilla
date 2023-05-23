import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Entrees = () => {
  const cartes = [
    { id: 1, titre: "Carte 1", contenu: "Contenu de la carte 1" },
    { id: 2, titre: "Carte 2", contenu: "Contenu de la carte 2" },
    { id: 3, titre: "Carte 3", contenu: "Contenu de la carte 3" },
    // Ajoutez autant d'objets carte que nécessaire
  ];

  return (
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text>
          Savourez nos meilleurs plats avec un accompagnement au choix et une
          boisson!
        </Text>
      </View>
      <View style={styles.row}>
        {cartes.map((carte) => (
          // <TouchableOpacity>
          <View style={styles.carte} key={carte.id}>
            <Text style={styles.titre}>{carte.titre}</Text>
            <Text style={styles.contenu}>{carte.contenu}</Text>
            <Image
              source={require("./../../../assets/favicon.png")}
              style={styles.image}
            />
          </View>
          //</TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  intro: {
    //flex: 1,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    //flex: 1,
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

export default Entrees;
