import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { CartContext } from "../utils/context/CartContext";
import {
  AspectRatio,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  VStack,
} from "native-base";
import GoBackButton from "./GoBackButton";
import CustomButton from "./CustomButton";

const Cart = (incrementQuantity, decrementQuantity) => {
  const { cartItems, totalPrice, updateTotalPrice, quantity } =
    useContext(CartContext);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems, updateTotalPrice]);

  const getUniqueItems = (items) => {
    const uniqueItems = [];
    items.forEach((item) => {
      const existingItem = uniqueItems.find(
        (uItem) => uItem.name === item.name
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        uniqueItems.push({ ...item, quantity: 1 });
      }
    });
    return uniqueItems;
  };

  const uniqueCartItems = getUniqueItems(cartItems);

  return (
    <View>
      {/* <GoBackButton />
      <Text>Panier :</Text>
      <Divider />
      {uniqueCartItems.map((item, index) => {
        return (
          <Box>
            <VStack>
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
                  uri: `https://api-gyozilla.onrender.com/${item.image}`,
                }}
                alt="image"
              />
              <HStack key={index}>
                <Text>
                  {item.quantity} {item.name} :{" "}
                </Text>
              </HStack>
              <Text>{item.price} €</Text>
            </VStack>
          </Box>
        );
      })}
      <Text>Prix total : {totalPrice} €</Text> */}
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
            Panier :
          </Heading>
        </Stack>
        {uniqueCartItems.map((item, index) => {
          return (
            <>
              <AspectRatio w="50%">
                <Image
                  resizeMode="cover"
                  style={{
                    flex: 1,
                    minWidth: 50,
                    maxHeight: 50,
                    minHeight: 50,
                    marginTop: 10,
                  }}
                  source={{
                    uri: `https://api-gyozilla.onrender.com/${item.image}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
              <VStack px={4} space={2} mt={2}>
                <Heading size="sm" ml="-1">
                  Description :{" "}
                </Heading>
                <Text>{item.description}</Text>
              </VStack>
              <HStack px={4} space={2} mt={2}>
                <Heading size="sm" ml="-1">
                  Prix :{" "}
                </Heading>
                <Text>{item.price}</Text>
              </HStack>
              <HStack px={4} space={2} mt={2}>
                {/* <Button onPress={decrementQuantity}>-</Button> */}

                <Heading size="sm" ml="-1">
                  Nombre de produit :
                </Heading>
                <Text>{quantity}</Text>
                {/* <Button onPress={incrementQuantity}>+</Button> */}
              </HStack>
              <HStack px={4} space={2} mt={2}>
                <Heading size="sm" ml="-1">
                  Total :
                </Heading>
                <Text>{totalPrice} €</Text>
              </HStack>
            </>
          );
        })}
      </Box>
    </View>
  );
};

export default Cart;
