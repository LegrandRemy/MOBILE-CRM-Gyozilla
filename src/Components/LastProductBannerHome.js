import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { AspectRatio, Box, Image, Skeleton } from 'native-base';

const LastProductBannerHome = ({item}) => {
    const navigation = useNavigation()

    const handlePress = (id) => {
        navigation.navigate('LastProduct', { id: id });
    };
    return (
    <>
    {(item)?
        <TouchableHighlight onPress={()=>handlePress(item.id)} underlayColor="transparent">
            <Box alignItems={"center"} marginY={-8} marginBottom={3}>
            <AspectRatio w="90%" ratio={16 / 9}>
                <Image
                borderRadius={10}
                source={{uri: `https://api-gyozilla.onrender.com/${item?.image}`}}
                alt="image"
                />
            </AspectRatio>
            </Box>
        </TouchableHighlight>

        :
        <Box alignItems={"center"} marginY={-8} marginBottom={3}>
            <Skeleton borderRadius={10} width={"90%"} height={200}/>
        </Box>
        }
    </>
    )
}

export default LastProductBannerHome