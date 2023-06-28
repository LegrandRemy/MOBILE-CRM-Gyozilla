import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Box } from 'native-base'

const ListHomeImgBG = ({ lastNews }) => {
  return lastNews?.map((item) => (
    <Box
      display={'flex'}
      flexWrap={'wrap'}
      flexDirection={'column'}
      width={'48%'}
      margin={0.5}
      backgroundColor={'#CDE8E7'}
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
  ))
}

export default ListHomeImgBG
