import React, { useContext, useEffect, useState } from "react";
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
  Radio,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import GoBackButton from "./GoBackButton";
import { instanceAxios } from "../utils/interceptor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserContext } from "../utils/context/UserContext";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";

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
  const { user } = useContext(UserContext);
  const [orderType, setOrderType] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    updateTotalPrice();
  }, [cartItems, updateTotalPrice]);

  const navigation = useNavigation();

  //const totalPriceForProduct = productDetails.price * quantity;

  const handleOrderTypeChange = (value) => {
    setOrderType(value);
  };

  const handleCheckout = async () => {
    try {
      setIsSubmitting(true);
      const customerId = user.id;
      console.log("user", user);
      // Construisez l'objet de commande avec les informations nécessaires
      const order = {
        id_customers: customerId,
        id_franchises: 1,
        cartItems,
        total_price: totalPrice,
        date_order: moment().format("YYYY-MM-DD"),
        id_order_types: Number(orderType),
      };
      const token = await AsyncStorage.getItem("@token");
      // Vérifiez si l'ID du client est vide
      if (!customerId) {
        // page login si pas log
        navigation.navigate("LoginRegisterScreen");
        return;
      }
      if (token) {
        instanceAxios.defaults.headers.common["Authorization"] =
          "Bearer " + token;
      }
      // Envoyez la commande à la base de données
      const response = await instanceAxios.post("orders", order);

      // Réinitialisez le panier et effectuez d'autres actions nécessaires après la validation de la commande
      clearCart();

      console.log("response.data", response.data);
      console.log("order", order);
    } catch (error) {
      console.error("Erreur lors de l'envoi de la commande :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <Stack space={2} ml={5} mb={3}>
          <Text mb={2}>Choisissez le type de commande :</Text>
          <VStack space={2}>
            <Radio.Group
              name="orderType"
              value={orderType}
              onChange={handleOrderTypeChange}
            >
              <VStack space={2}>
                <Radio value={1}>Click and Collect</Radio>
                <Radio value={2}>Livraison à domicile</Radio>
                <Radio value={3}>Sur place</Radio>
              </VStack>
            </Radio.Group>
          </VStack>
        </Stack>

        <HStack justifyContent={"space-between"} mx={5}>
          <Button
            onPress={handleCheckout}
            disabled={isSubmitting}
            isLoading={isSubmitting}
            colorScheme="teal"
            variant="outline"
          >
            Valider le panier
          </Button>
          <Heading>{totalPrice.toFixed(2)} €</Heading>
        </HStack>
      </Box>
    </ScrollView>
  );
};

export default Cart;
