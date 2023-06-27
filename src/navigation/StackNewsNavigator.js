import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OneNews from '../screen/OneNews';
import Home from '../screen/TapBar/HomeScreen';
import LastProductsHome from '../screen/LastProductsHome';

const Stack = createStackNavigator();

const StackNewsNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: ()=>null}}>
            <Stack.Screen 
            name="Home" 
            component={Home} 
            />
            <Stack.Screen 
            name="OneNews" 
            component={OneNews} 
            options={({ route }) => ({
                title: `OneNews ${route.params?.id}`,
                })}
            />
            <Stack.Screen 
            name="LastProduct" 
            component={LastProductsHome} 
            options={({ route }) => ({
                title: `LastProduct ${route.params?.id}`,
                })}
            />
        </Stack.Navigator>
    )
}

export default StackNewsNavigator