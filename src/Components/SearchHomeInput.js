import React from 'react'
import { Center, Icon, Input } from 'native-base';
import { MaterialIcons } from "@expo/vector-icons";

const SearchHomeInput = () => {
    return (
        <Center paddingTop={5} flex={1} px="2">
            <Input
            size="sm"
            placeholder="Trouver un restaurant"
            width="100%"
            backgroundColor={"#faeccb"}
            borderRadius="10"
            py="1"
            px="1"
            fontSize={14}
            fontWeight={"bold"}
            placeholderTextColor="#77614c"
            borderColor={"#77614c"}
            color={"#faeccb"}
            InputLeftElement={
                <Icon
                m="2"
                ml="3"
                size="6"
                color="#77614c"
                as={<MaterialIcons name="search" />}
                />
            }
            />
        </Center>
    );
}


export default SearchHomeInput