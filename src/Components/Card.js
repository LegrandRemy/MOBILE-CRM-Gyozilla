import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const Card = ({ title, description, image }) => (
  <View style={styles.card}>
    <Image source={image} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
  </View>
)

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#fff',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 6,
  },
  cardTitle: {
    margin: 10,
    fontWeight: 'bold',
  },
  cardDescription: {
    margin: 10,
  },
})

export default Card
