import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableHighlight,
} from 'react-native'
import React from 'react'
import { Box } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const ListHomeImgBG = ({ lastProducts }) => {
  const navigation = useNavigation()

  const handlePress = (id) => {
    navigation.navigate('ProductDetailsScreen', { id: id })
  }
  return lastProducts?.map((item) => {
    console.log(item)
    return (
      // <TouchableHighlight
      //   onPress={() => handlePress(item.id)}
      //   underlayColor="transparent"
      // >
      <Box
        display={'flex'}
        flexWrap={'wrap'}
        flexDirection={'column'}
        width={'48%'}
        margin={0.5}
        marginTop={3}
        backgroundColor={'#5F8D85'}
        justifyContent={'center'}
        padding={0}
        paddingBottom={0}
        borderRadius={6}
        // width={380}
        // height={380}
      >
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
      // </TouchableHighlight>
    )
  })
}

export default ListHomeImgBG
