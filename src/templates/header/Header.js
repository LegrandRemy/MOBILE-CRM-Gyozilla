import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <>
                <StatusBar bg="#3700B3" barStyle="light-content" />
            <Box safeAreaTop bg="violet.600" />
            <HStack bg="violet.600" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
                <HStack alignItems="center">
                <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color="white" />} />
                </HStack>
                <HStack>
                <IconButton icon={<Icon as={MaterialIcons} name="favorite" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color="white" />} />
                <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color="white" />} />
                </HStack>
            </HStack>
        </>

    )
}

export default Header