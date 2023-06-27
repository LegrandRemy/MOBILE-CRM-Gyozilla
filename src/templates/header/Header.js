import React from 'react'
import {Icon, Box, Image, IconButton, Menu, Pressable,ChevronDownIcon } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from 'react';
import { UserContext } from '../../utils/context/UserContext';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const { user, isLogged } = useContext(UserContext);
    const navigation = useNavigation();

    const handleLogOut = ()=>{
        AsyncStorage.removeItem('@token');
        navigation.navigate("LoginRegister");
    }

    const handlePress = ()=>{
        navigation.navigate("HomeDashBoard");
    }

    return (
        <>
        {user.role ? 
            <Box style={{paddingTop: 20, flexDirection:"row", justifyContent: "space-between", alignItems:"center", width: '100%', height:70, backgroundColor:"#1d292b"}}>
                <Image source={require("../../../assets/logo_gyozilla.png")} alt='Logo' style={{marginLeft: 10, width:"25%", height:100}}/>
                <Box marginRight={4} style={{ flexDirection:"row", justifyContent: "center",alignItems:"center"}}>
                    <Text style={{color:"white"}}>{user.lastname} {user.firstname}</Text>
                    <Menu w="140" trigger={triggerProps => {
                    return <Pressable accessibilityLabel="Plus d'options" {...triggerProps}>
                            <Icon as={MaterialCommunityIcons} name="chevron-down" size={"md"} color="white" marginTop={1} />
                            </Pressable>;
                    }}>
                        <Menu.Item onPress={handleLogOut} >Déconnexion</Menu.Item>
                        <Menu.Item onPress={handlePress} >Dashboard</Menu.Item>
                    </Menu>
                </Box>
                
            </Box>
        :
            <Box style={{ flexDirection:"row", justifyContent: "space-between", width: '100%', height:70, backgroundColor:"#77614c"}}>
                <IconButton width={"30%"} icon={<Icon as={MaterialCommunityIcons} name="ticket-percent" size="xl" color="#faeccb" />} />
                <Image source={require("../../../assets/logo_gyozilla.png")} alt='Logo' style={{width:"25%", height:100}}/>
                <IconButton width={"30%"} icon={<Icon as={MaterialCommunityIcons} name="account" size="xl" color="#faeccb" />} />
            </Box>
        }
        </>
    )
}

export default Header