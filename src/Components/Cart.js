import React, { useContext, useEffect } from "react";
import { TouchableOpacity, View } from "react-native";
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
  Text,
  Pressable,
  Icon,
  ScrollView,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoBackButton from "./GoBackButton";

const Cart = () => {
  const {
    cartItems,
    totalPrice,
    updateTotalPrice,
    quantity,
    setQuantity,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems, updateTotalPrice]);

  //const totalPriceForProduct = productDetails.price * quantity;

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Box style={{ width: "100%", marginBottom: 10 }}>
        <Stack
          p="2"
          alignItems="center"
          justifyContent="center"
          height={55}
          width={"auto"}
          space={2}
          bgColor="#5F8D85"
        >
          <Heading size="sm" ml="-1">
            Panier :
          </Heading>
        </Stack>
        <HStack alignItems={"center"} justifyContent={"space-between"}>
          <GoBackButton textButton="continuer mes achats" test="test" />
          <Pressable
            accessibilityLabel="vider le panier"
            onPress={clearCart}
            pr={15}
          >
            <Icon
              as={MaterialCommunityIcons}
              name="delete"
              size={"md"}
              color="#5F8D85"
              marginTop={1}
            />
          </Pressable>
        </HStack>
        <Divider mt={2} mb={2} />

        {cartItems.map((item, index) => {
          return (
            <Box
              bgColor={"#faeccb"}
              mx={5}
              my={3}
              borderRadius={10}
              key={index}
            >
              <HStack alignItems={"center"} justifyContent={"space-between"}>
                <VStack ml={5} justifyContent={"center"} maxWidth={"70%"}>
                  <Heading size="md">
                    <Text>{item.name}</Text>
                  </Heading>
                  <Text>{(item.price * item.quantity).toFixed(2)} €</Text>
                </VStack>

                <HStack p={4} space={3} alignItems={"center"}>
                  <TouchableOpacity
                    style={{ alignItems: "center" }}
                    onPress={() => decrementQuantity(item, index)}
                  >
                    <Icon
                      as={MaterialCommunityIcons}
                      name="minus"
                      size={"lg"}
                      color="white"
                      bgColor="#5F8D85"
                      borderRadius={50}
                    />
                  </TouchableOpacity>
                  <Heading size="md">
                    <Text>{item.quantity}</Text>
                  </Heading>
                  <TouchableOpacity
                    onPress={() => incrementQuantity(item, index)}
                  >
                    <Icon
                      as={MaterialCommunityIcons}
                      name="plus"
                      size={"lg"}
                      color="white"
                      bgColor="#5F8D85"
                      borderRadius={50}
                    />
                  </TouchableOpacity>
                </HStack>
              </HStack>
              <HStack px={4} space={2} mt={2}></HStack>
            </Box>
          );
        })}
        <Divider mt={2} mb={2} />
        <HStack justifyContent={"space-between"} mx={5}>
          <Heading>Total</Heading>
          <Heading>{totalPrice.toFixed(2)} €</Heading>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default Cart;
