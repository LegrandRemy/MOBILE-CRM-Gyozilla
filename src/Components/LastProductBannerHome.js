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
      {item && item[0]?.image ? (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          underlayColor="transparent"
          style={{ alignItems: 'center' }}
        >
          <Image
            width={380}
            height={380}
            borderRadius={10}
            source={{
              uri: `https://api-gyozilla.onrender.com/${item[0].image}`,
            }}
            alt="en ce moment"
          />
        </TouchableOpacity>
      ) : (
        <Box alignItems={'center'} marginY={-188} marginBottom={3}>
          <Skeleton borderRadius={10} width={'90%'} height={200} />
        </Box>
      )}
    </>
  )
}

export default LastProductBannerHome
