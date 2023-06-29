import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor'
import { Image } from 'native-base'

const LastProductsHome = () => {
  const route = useRoute()
  const { id } = route.params
  const [product, setProduct] = useState()

  useEffect(() => {
    instanceAxios
      .get(`product/${id}`)
      .then((res) => {
        setProduct(res.data)
      })
      .catch((error) => {
        setProduct([])
      })
  }, [])
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.productName}>{product?.name}</Text>
        <Image
          source={{
            uri: `https://api-gyozilla.onrender.com/${product?.image}`,
          }}
          style={styles.productImage}
          resizeMode="cover"
          alt="Image du produit"
        />
        <Text style={styles.productDescription}>{product?.description}</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#FF0000',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#FF0000',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default LastProductsHome
