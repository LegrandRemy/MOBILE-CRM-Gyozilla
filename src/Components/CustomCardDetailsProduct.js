import React, { useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
} from "native-base";
import CustomButton from "./CustomButton";
import GoBackButton from "./GoBackButton";
import { CartContext, CartProvider } from "../utils/context/CartContext";

const CustomCardDetailsProduct = ({ productDetails }) => {
  const { addToCart, cartItems, quantity, setQuantity, updateTotalPrice } =
    useContext(CartContext);
  console.log("cartItems", cartItems);

  // const { setCart, cart } = useContext(CartContext);
  //
  // const addToCart = (value) => {
  //   let newCart = [...cart];
  //   for (i = 0; i < quantity; i++) {
  //     newCart.push(value);
  //   }
  //   setCart(newCart);
  // };

  const navigation = useNavigation();

  const totalPrice = productDetails.price * quantity;

  const incrementQuantity = () => {
    const totalQuantity = quantity + 1;
    setQuantity(totalQuantity);
    updateTotalPrice();
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const totalQuantity = quantity - 1;
      setQuantity(totalQuantity);
      updateTotalPrice();
    }
  };

  const handleAddToCart = () => {
    addToCart(productDetails);
    setQuantity(1);
    updateTotalPrice();
  };

  //console.log("totalPrice", totalPrice);
  // console.log("image", productDetails.image);
  //console.log("quantity", quantity);

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
            {productDetails.name}
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
              uri: `https://api-gyozilla.onrender.com/${productDetails.image}`,
            }}
            alt="image"
          />
        </AspectRatio>
        <VStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Description :{" "}
          </Heading>
          <Text>{productDetails.description}</Text>
        </VStack>
        <HStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Prix :{" "}
          </Heading>
          <Text>{productDetails.price}</Text>
        </HStack>
        <HStack px={4} space={2} mt={2}>
          <Button onPress={decrementQuantity}>-</Button>

          <Heading size="sm" ml="-1">
            Nombre de produit :
          </Heading>
          <Text>{quantity}</Text>
          <Button onPress={incrementQuantity}>+</Button>
        </HStack>
        <HStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Total :
          </Heading>
          <Text>{totalPrice} €</Text>
          <CustomButton
            onPress={handleAddToCart}
            textButton="Ajouter au panier"
          />
        </HStack>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  cardProduct: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    border: "none",
    cursor: "pointer",
    position: "relative",
    shadowColor: "#000",
    shadowOffset: {
      width: 15,
      height: 10,
    },
    shadowOpacity: 0.55,
    shadowRadius: 2,
    elevation: 5,
  },
  titleContainer: {
    backgroundColor: "#5F8D85",
    opacity: 0.8,
    padding: 5,
    display: "flex",
    flexDirection: "column",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  cardImage: {
    flexGrow: 1,
  },
  actionsContainer: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: -50,
    left: 0,
    backgroundColor: "#5F8D85",
    opacity: 0.6,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
  },
  actionButton: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: 5,
  },
  removeButton: {
    marginRight: 5,
  },
  addButton: {
    marginLeft: 5,
  },
  cartButton: {},
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomCardDetailsProduct;
