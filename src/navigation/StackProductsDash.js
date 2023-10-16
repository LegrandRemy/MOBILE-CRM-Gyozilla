import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Header from '../templates/header/Header';
import CrudProduct from '../screen/dashboard/CrudProduct';
import ProductsDash from '../screen/dashboard/ProductsDash';

const Stack = createStackNavigator();

const StackProductsDash = () => {
    return (
        <Stack.Navigator screenOptions={{header: ()=><Header/>}}>
            <Stack.Screen
            name='ProductsDash'
            component={ProductsDash}
            />
            <Stack.Screen
            name='CrudProduct'
            component={CrudProduct}
            options={({ route }) => ({
                title: `CrudProduct ${route.params?.id}`,
                })}
            />
        </Stack.Navigator>
    )
}

export default StackProductsDash