import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OneNews from '../screen/OneNews';
import Home from '../screen/TapBar/HomeScreen';

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
        </Stack.Navigator>
    )
}

export default StackNewsNavigator