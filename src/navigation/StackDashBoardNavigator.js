import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeDashBoard from '../screen/dashboard/HomeDashBoard';
import Header from '../templates/header/Header';

const Stack = createStackNavigator();

const StackDashBoardNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => <Header />}}>
        <Stack.Screen 
            name="HomeDashBoard" 
            component={HomeDashBoard} 
        />
        </Stack.Navigator>
    )
}

export default StackDashBoardNavigator
