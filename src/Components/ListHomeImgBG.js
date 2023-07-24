import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const ListHomeImgBG = ({props}) => {
    return (
        <>
        {props.map((prop) => (
            <ImageBackground key={prop.id} style={{
                width:150,
                height:150,
                padding:10,
                marginHorizontal: 5,
                marginVertical: 5,
            }} source={{uri: `https://api.gyozilla-restaurants.fr/${prop.image}`}} resizeMode="contain" >
                <Text style={{fontWeight:"600"}}>{prop.name}</Text>
            </ImageBackground>
        ))}
        </>
    )
}

export default ListHomeImgBG