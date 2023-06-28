import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Stack,
  HStack,
  Radio,
} from "native-base";

const CustomCardRestaurantMenu = ({ product, onClick, menu, src, title }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ width: "50%", height: 200, marginBottom: 10, padding: 5 }}
    >
      <HStack space={2} height={"100%"}>
        <Box
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.100"
          borderWidth="3"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "coolGray.100",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "coolGray.100",
          }}
        >
          <Stack
            p="4"
            alignItems="center"
            justifyContent="center"
            height={75}
            space={2}
            bgColor="#5F8D85"
          >
            <Heading size="sm" ml="-1">
              {title}
            </Heading>
          </Stack>
          <Box>
            <AspectRatio w="100%">
              <Image resizeMode="cover" source={src} alt="image" />
            </AspectRatio>
          </Box>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};
export default CustomCardRestaurantMenu;
