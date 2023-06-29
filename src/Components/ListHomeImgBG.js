import { Text, ImageBackground } from 'react-native'
import React from 'react'
import { REACT_APP_URL_API } from '@env'

const ListHomeImgBG = ({lastNews}) => {
    return (
        <>
        {lastNews?.map((item) => (
            <ImageBackground key={item.id} style={{
                width:150,
                height:150,
                padding:10,
                marginHorizontal: 5,
                marginVertical: 5,
            }} source={{uri: `${REACT_APP_URL_API}${item.image}`}} resizeMode="contain" >
                <Text style={{fontWeight:"600"}}>{item.name}</Text>
            </ImageBackground>
        ))}
        </>
    )
}

export default ListHomeImgBG