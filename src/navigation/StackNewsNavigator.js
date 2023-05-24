import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OneNews from '../screen/OneNews';

const Stack = createStackNavigator();

const StackNewsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="OneNews" 
            component={OneNews} 
            options={({ route }) => ({
                title: `OneNews ${route.params.id}`,
                })}
            />
        </Stack.Navigator>
    )
}

export default StackNewsNavigator