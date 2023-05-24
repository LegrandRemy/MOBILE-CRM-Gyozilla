import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { instanceAxios } from '../utils/interceptor';
import { Image } from 'native-base';

const OneNews = () => {
    const route = useRoute();
    const id = route.params;
    const [news, setNews] = useState();

    useEffect(() => {
        instanceAxios
            .get(`news/${id}`)
            .then((res) => {
                setNews(res.data);
            })
            .catch((error) => {
                setNews([]);
            });
        }, [id]);


    return (
        <View>
            <Text>Titre: {news.name}</Text>
            <Image
                source={{uri: `https://api-gyozilla.onrender.com/${news.image}`}}
                style={{ flex: 1, minWidth: 150, maxHeight: 150, minHeight: 150, marginTop:10}}
                resizeMode="cover"
            />
            <Text>Contenu: {news.description}</Text>
        </View>
    )
}

export default OneNews