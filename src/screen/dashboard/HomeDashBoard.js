import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SalesRevenueDash from './SalesRevenueDash'
import EmployeeDash from './EmployeeDash'
import ProductsDash from './ProductsDash';



const Drawer = createDrawerNavigator();

const HomeDashBoard = () => {

    return (
        <Drawer.Navigator defaultStatus='open' 
        screenOptions={{drawerStyle:{backgroundColor:'#1d292b', paddingTop:4},
        headerShown: false,
        drawerInactiveTintColor:'white',
        drawerActiveTintColor: 'white', 
        drawerActiveBackgroundColor:'#F8A500'}}>

          <Drawer.Screen name="CA" component={SalesRevenueDash} />
          <Drawer.Screen name="Produits" component={ProductsDash} />
          <Drawer.Screen name="Employés" component={EmployeeDash} />

        </Drawer.Navigator>
    )
}

export default HomeDashBoard
