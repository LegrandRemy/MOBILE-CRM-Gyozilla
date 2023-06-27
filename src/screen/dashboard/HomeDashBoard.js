import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactezNous from '../ContactUsScreen';
import MyAccount from '../MyAccountScreen';

const Drawer = createDrawerNavigator();

const HomeDashBoard = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Contact" component={ContactezNous} />
          <Drawer.Screen name="Compte" component={MyAccount} />
        </Drawer.Navigator>
    )
}

export default HomeDashBoard
