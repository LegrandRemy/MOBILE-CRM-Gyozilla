import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AspectRatio, Box, Image, Skeleton } from 'native-base'

const LastProductBannerHome = ({ item }) => {
  console.log('item', item)
  const navigation = useNavigation()
  const handlePress = (id) => {
    navigation.navigate('LastProduct', { id: id })
  }
  return (
    <>
      {item ? (
        <TouchableOpacity
          onPress={() => handlePress(item.item.id)}
          underlayColor="transparent"
          style={{ justifyContent: 'center' }}
        >
          <Image
            width={380}
            height={400}
            borderRadius={10}
            source={{
              uri: `https://api-gyozilla.onrender.com/${item.item.image}`,
            }}
            alt="image"
          />
        </TouchableOpacity>
      ) : (
        <Box alignItems={'center'} marginY={-8} marginBottom={3}>
          <Skeleton borderRadius={10} width={'90%'} height={200} />
        </Box>
      )}
    </>
  )
}

export default LastProductBannerHome
