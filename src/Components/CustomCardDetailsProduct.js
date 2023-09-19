import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useIsFocused, useNavigation } from "@react-navigation/native";

import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Stack,
  VStack,
} from "native-base";
import CustomButton from "./CustomButton";
import GoBackButton from "./GoBackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { CartContext, CartProvider } from "../utils/context/CartContext";

const CustomCardDetailsProduct = ({ route }) => {
  const { addToCart, cartItems, quantity, setQuantity, updateTotalPrice } =
    useContext(CartContext);

  const { product } = route.params;

  const totalPriceForProduct = (product.price * quantity).toFixed(2);

  // const incrementQuantity = () => {
  //   const totalQuantity = quantity + 1;
  //   setQuantity(totalQuantity);
  //   updateTotalPrice();
  // };

  // const decrementQuantity = () => {
  //   if (quantity > 1) {
  //     const totalQuantity = quantity - 1;
  //     setQuantity(totalQuantity);
  //     updateTotalPrice();
  //   }
  // };

  // const handleAddToCart = () => {
  //   addToCart(product);
  //   setQuantity(1);

  //   updateTotalPrice();
  // };

  return (
    <View>
      <GoBackButton />

      <Box style={{ width: "100%", marginBottom: 10 }}>
        <Stack
          p="2"
          alignItems="center"
          justifyContent="center"
          height={55}
          space={2}
          bgColor="#5F8D85"
        >
          <Heading size="sm" ml="-1">
            {product.name}
          </Heading>
        </Stack>
        <AspectRatio w="100%">
          <Image
            resizeMode="cover"
            style={{
              flex: 1,
              minWidth: 150,
              maxHeight: 150,
              minHeight: 150,
              marginTop: 10,
            }}
            source={{
              uri: `https://api.gyozilla-restaurants.fr/${product.image}`,
            }}
            alt="image"
          />
        </AspectRatio>
        <VStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Description :{" "}
          </Heading>
          <Text>{product.description}</Text>
        </VStack>
        <HStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Prix :{" "}
          </Heading>
          <Text>{product.price} €</Text>
        </HStack>
      </Box>
    </View>
  );
};
export default CustomCardDetailsProduct;
