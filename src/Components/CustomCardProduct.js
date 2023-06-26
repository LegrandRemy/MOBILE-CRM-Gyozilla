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

const CustomCardProduct = ({ product, onClick, menu }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{ width: "50%", height: 200, marginBottom: 10 }}
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
              {product ? product.name : menu.name}
            </Heading>
          </Stack>
          <Box>
            <AspectRatio w="100%">
              <Image
                resizeMode="cover"
                source={{
                  uri: product
                    ? `https://api-gyozilla.onrender.com/${product.image}`
                    : `https://api-gyozilla.onrender.com/${menu.image}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </Box>
        <Radio my={1} label={`product`} aria-label={`product`}></Radio>
      </HStack>
    </TouchableOpacity>
  );
};
export default CustomCardProduct;
