import { View, Text, ImageBackground, Box, Image } from 'react-native'
import React from 'react'

const ListHomeImgBG = ({ lastNews }) => {
  return (
    <>
      {lastNews?.map((item) => (
        <ImageBackground
          key={item.id}
          style={{
            width: 150,
            height: 150,
            padding: 10,
            marginHorizontal: 5,
            marginVertical: 5,
          }}
          source={{ uri: `https://api-gyozilla.onrender.com/${item.image}` }}
          resizeMode="contain"
        >
          <Text style={{ fontWeight: '600' }}>{item.name}</Text>
        </ImageBackground>
      ))}
    </>
  )
}

export default ListHomeImgBG
