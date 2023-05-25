import { View, Text, FlatList, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const FlatListNewsCarousel = ({propsData}) => {
    const navigation = useNavigation()

    const handlePress = (id) => {
        navigation.navigate('OneNews', { id: id });
    };

    const renderNewsCarouselItem = ({ item }) => (
        <TouchableHighlight onPress={()=>handlePress(item.id)} underlayColor="transparent">
        <View key={item.id} style={{ width: 200, minHeight: 250, marginRight: 30 }}>
        <Image
            source={{uri: `https://api-gyozilla.onrender.com/${item.image}`}}
            style={{ flex: 1, minWidth: 150, maxHeight: 150, minHeight: 150, marginTop:10}}
            resizeMode="cover"
            alt="Image des actualités"
        />
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
        </View>
        </TouchableHighlight>
    );

    return (
        <FlatList
        data={propsData}
        renderItem={renderNewsCarouselItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} 
    />
    )
}

export default FlatListNewsCarousel