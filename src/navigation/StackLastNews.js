
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LastNewsProducts from '../screen/LastNewsProducts';

const StackLastNews = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="LastNews" 
            component={LastNewsProducts}
            options={({ route }) => ({
                title: `LastNews ${route.params.id}`,
            })}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default StackLastNews