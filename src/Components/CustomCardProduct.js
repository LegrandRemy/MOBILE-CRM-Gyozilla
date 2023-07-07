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
  Text,
} from "native-base";
import { REACT_APP_URL_API } from "@env";

const CustomCardProduct = ({ product, onPress, menu, customStyle }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ width: "50%", height: 250, marginBottom: 10 }, customStyle]}
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
            backgroundColor: "white",
          }}
        >
          <Stack
            p="2"
            alignItems="center"
            justifyContent="center"
            height={65}
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
                    ? `${REACT_APP_URL_API}${product.image}`
                    : `${REACT_APP_URL_API}${menu.image}`,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box alignItems={"flex-end"} mt={3} mr={1}>
            <Heading color={"#5F8D85"}>
              {product ? product.price : menu.price} €
            </Heading>
          </Box>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};
export default CustomCardProduct;
