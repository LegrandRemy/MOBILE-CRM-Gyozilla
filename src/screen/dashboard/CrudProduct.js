import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { getProductById } from '../../utils/api-call/getProductById';
import { useRoute } from '@react-navigation/native';

const CrudProduct = () => {
    const route = useRoute();
    const {id} = route.params 
    const [product, setProduct] = useState();

    useEffect(()=>{
        try {
            getProductById(id)
            .then((res)=>{
                if (res.data) {
                    setProduct(res.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    },[])

    return (
        <View>
        <Text>{product?.name}</Text>
        <Text>{product?.productCategory.name}</Text>
        <Text>{product?.description}</Text>
        <Text>{product?.price}</Text>
        <Text>{product?.creation_steps}</Text>
        </View>

    )
}

export default CrudProduct