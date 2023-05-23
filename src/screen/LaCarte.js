import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const Card = () => {
  const cartes = [
    { id: 1, titre: 'Carte 1', contenu: 'Contenu de la carte 1' },
    { id: 2, titre: 'Carte 2', contenu: 'Contenu de la carte 2' },
    { id: 3, titre: 'Carte 3', contenu: 'Contenu de la carte 3' },
    // Ajoutez autant d'objets carte que nécessaire
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.intro}>
        {' '}
        Savourez nos meilleurs plats avec un accompagnement au choix et une
        boisson!
      </Text>
      <View style={styles.row}>
        {cartes.map((carte) => (
          <TouchableOpacity onPress={handleImageClick}>
            <View style={styles.carte} key={carte.id}>
              <Text style={styles.titre}>{carte.titre}</Text>
              <Text style={styles.contenu}>{carte.contenu}</Text>
              <Image
                source={require('./../../assets/favicon.png')}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  intro: {
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  carte: {
    backgroundColor: 'white',
    padding: 10,
    margin: 6,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  contenu: {
    fontSize: 16,
  },
  image: {
    alignSelf: 'center',
  },
})

export default Card
