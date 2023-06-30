import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { TouchableHighlight } from 'react-native-gesture-handler'

const ListHomeImgBG = ({ lastProducts }) => {
  const navigation = useNavigation()

  const handlePress = (item) => {
    navigation.navigate('LastProductsHome', { item: item })
  }
  return lastProducts?.map((item) => {
    return (
      <TouchableHighlight
        onPress={() => handlePress(item)}
        style={{
        width:'48%',
        marginHorizontal: 3,
        marginBottom: 10
        }}
        underlayColor='transparent'
      >
      <Box maxHeight={200}>
        <Text
          style={{
            fontWeight: 'bold',
            marginTop: 15,
            textAlign: 'center',
            width: '100%',
            paddingBottom: 2,
          }}
        >
          {item.name}
        </Text>
        <ImageBackground
          key={item.id}
          style={{
            width: '100%',
            height: 150,
          }}
          source={{
            uri: `https://api-gyozilla.onrender.com/${item.image}`,
          }}
          resizeMode="contain"
        ></ImageBackground>
      </Box>
      </TouchableHighlight>
    )
  })
}

export default ListHomeImgBG
