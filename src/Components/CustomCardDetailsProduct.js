import React, { useState } from "react";
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

const CustomCardDetailsProduct = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productDetails.price);
  //const { updateCartItems } = useContext(CartContext);

  const navigation = useNavigation();

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  console.log("image", productDetails.image);
  console.log("product", productDetails);

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
          <Button onClick={decrementQuantity}>-</Button>

          <Heading size="sm" ml="-1">
            Nombre de produit :
          </Heading>
          <Text>{quantity}</Text>
          <Button onClick={incrementQuantity}>+</Button>
        </HStack>
        <HStack px={4} space={2} mt={2}>
          <Heading size="sm" ml="-1">
            Total :
          </Heading>
          <Text>{totalPrice} €</Text>
          <CustomButton onPress={addToCart} textButton="Ajouter au panier" />
        </HStack>
      </Box>

      {/* {id && (
          <Box style={[styles.actionsContainer]}>
            <TouchableOpacity
              style={[styles.actionButton, styles.removeButton]}
              onPress={decrementQuantity}
            >
              <RemoveIcon name="remove" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              style={[styles.actionButton, styles.addButton]}
              onPress={incrementQuantity}
            >
              <AddIcon name="add" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.cartButton]}
              onPress={addToCart}
            >
              <AddCardIcon name="cart-plus" size={30} color="black" />
            </TouchableOpacity>
          </Box>
        )} */}
      {/* </Box> */}
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
