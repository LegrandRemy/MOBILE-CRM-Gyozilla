import React from 'react'
import {Icon, Box, Image, IconButton } from 'native-base';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Header = () => {
    return (
        <>
        <Box style={{ flexDirection:"row", justifyContent: "space-between", width: '100%', height:70, backgroundColor:"#77614c"}}>
            <IconButton width={"30%"} icon={<Icon as={MaterialCommunityIcons} name="ticket-percent" size="xl" color="#faeccb" />} />
            <Image source={require("../../../assets/logo_gyozilla.png")} alt='Logo' style={{width:"25%", height:100, marginTop:15}}/>
            <IconButton width={"30%"} icon={<Icon as={MaterialCommunityIcons} name="account" size="xl" color="#faeccb" />} />
        </Box>
        </>
    )
}

export default Header