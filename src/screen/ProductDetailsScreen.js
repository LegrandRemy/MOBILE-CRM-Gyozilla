import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CartContext, CartProvider } from "../utils/context/CartContext";
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
import CustomButton from "../components/CustomButton";
import GoBackButton from "../components/GoBackButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { imageUrl } from "../utils/interceptor";
import { REACT_APP_URL_API } from "@env";

const ProductDetailsScreen = ({ route }) => {
  const [productDetails, setproductDetails] = useState(route.params.product);

  const { addToCart, cartItems, quantity, setQuantity, updateTotalPrice } =
    useContext(CartContext);

  const navigation = useNavigation();

  const totalPriceForProduct = (productDetails.price * quantity).toFixed(2);
  // console.log("productDetails", `${imageUrl}${productDetails.image}`);

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

  return (
    <ScrollView>
      {productDetails ? (
        <>
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
              <AspectRatio w="100%" mb={5}>
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
                    uri: `${imageUrl}${productDetails.image}`,
                  }}
                  alt="image"
                />
              </AspectRatio>
              {/* <VStack px={4} space={2} mt={2}>
                <Heading size="sm" ml="-1">
                  Description :{" "}
                </Heading>
                <Text>{productDetails.description}</Text>
              </VStack> */}
              {/* <HStack px={4} space={2} mt={2}>
                <Heading size="sm" ml="-1">
                  Prix :{" "}
                </Heading>
                <Text>{productDetails.price} €</Text>
              </HStack> */}
              <HStack
                px={4}
                space={2}
                mt={5}
                mb={5}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <TouchableOpacity onPress={decrementQuantity}>
                  <Icon
                    as={MaterialCommunityIcons}
                    name="minus"
                    size={10}
                    color="white"
                    bgColor="#5F8D85"
                    marginTop={1}
                    borderRadius={10}
                    mr={5}
                  />
                </TouchableOpacity>

                <Heading size="xl" ml="-1">
                  {quantity}
                </Heading>
                <TouchableOpacity onPress={incrementQuantity}>
                  <Icon
                    as={MaterialCommunityIcons}
                    name="plus"
                    size={10}
                    color="white"
                    bgColor="#5F8D85"
                    marginTop={1}
                    borderRadius={10}
                    ml={5}
                  />
                </TouchableOpacity>
              </HStack>
              <HStack px={4} space={2} mt={5}>
                <CustomButton
                  onPress={handleAddToCart}
                  textButton={`Ajouter au panier - ${totalPriceForProduct} €`}
                  width={"100%"}
                  marginTop={20}
                />
              </HStack>
            </Box>
          </View>
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default ProductDetailsScreen;
