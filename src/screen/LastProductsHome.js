import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor'
import { Image, Box, Skeleton, Icon } from 'native-base'
import CustomButton from '../components/CustomButton'

const LastProductsHome = () => {
  const route = useRoute()
  const { item } = route.params
  const navigation = useNavigation()
  console.log(route.params)
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      {item ? (
        <View style={styles.container}>
          <Box>
            <Text style={styles.productName}>{item?.name}</Text>
          </Box>
          <Image
            source={{
              uri: `https://api.gyozilla-restaurants.fr/${item.image}`,
            }}
            style={styles.productImage}
            resizeMode="cover"
            alt="Image du produit"
          />
          <Text style={styles.productDescription}>{item.description}</Text>
          <Box style={styles.hungryBox}>
            <Text style={styles.hungryName}>
              Vous le voulez? C'est par ici!{' '}
            </Text>
            <TouchableOpacity
              style={styles.hungryButton}
              onPress={() => handlePress(item)}
            >
              <Text style={{ alignSelf: 'center', color: '#faeccb' }}>
                {/* <Icon
                  name="star"
                  type="FontAwesome"
                  style={{ fontSize: 20, color: 'white' }}
                /> */}
                Click & Collect
              </Text>
            </TouchableOpacity>{' '}
          </Box>
          <Box style={{ width: '25%', marginTop: 30, alignSelf: 'flex-end' }}>
            <Button
              color="orange"
              title="Retour"
              onPress={() => navigation.goBack()}
            />
          </Box>
        </View>
      ) : (
        <Box alignItems={'center'} marginY={-188} marginBottom={3}>
          <Skeleton borderRadius={10} width={'90%'} height={200} />
        </Box>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 44,
    backgroundColor: '#FFFFFF',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  productName: {
    alignSelf: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 48,
    color: '#faeccb',
    backgroundColor: '#77614c',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 5,
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
    color: '#77614c',
    fontStyle: 'italic',
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
  hungryBox: {
    width: '100%',
    marginTop: 35,
    alignSelf: 'center',
    backgroundColor: '#faeccb',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  hungryName: {
    fontWeight: 'bold',
  },
  hungryButton: {
    alignItems: 'center',
    width: '40%',
    backgroundColor: '#5F8D85',
    paddingHorizontal: 6,
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
})

export default LastProductsHome
