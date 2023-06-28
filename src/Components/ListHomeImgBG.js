import { View, Text, ImageBackground, Box, Image } from 'react-native'
import React from 'react'

const ListHomeImgBG = ({ toto }) => {
  return (
    <>
      {toto?.map((item) => (
        <Box
          key={item.id}
          style={{
            width: 160,
            height: 200,
            padding: 10,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 8,
            justifyContent: 'center',
          }}
        >
          <Image
            style={{ width: 120, height: 120, marginBottom: 10 }}
            source={{ uri: `https://api-gyozilla.onrender.com/${item.image}` }}
            resizeMode="contain"
          />

          <Text style={{ fontWeight: '600', textAlign: 'center' }}>
            {item.name}
          </Text>
        </Box>
      ))}
    </>
  )
}

export default ListHomeImgBG
