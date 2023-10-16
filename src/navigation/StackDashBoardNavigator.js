import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeDashBoard from '../screen/dashboard/HomeDashBoard';
import Header from '../templates/header/Header';
import ProductsDash from '../screen/dashboard/ProductsDash';
import CrudProduct from '../screen/dashboard/CrudProduct';

const Stack = createStackNavigator();

const StackDashBoardNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => <Header />}}>
            <Stack.Screen 
                name="HomeDashBoard" 
                component={HomeDashBoard} 
            />
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

export default StackDashBoardNavigator
