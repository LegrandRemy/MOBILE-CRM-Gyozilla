import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { getProductById } from "../utils/api-call/getProductById";
import { CartContext, CartProvider } from "../utils/context/CartContext";
import { useNavigation } from "@react-navigation/core";
import { Button, ScrollView } from "native-base";
import CustomCardDetailsProduct from "../components/CustomCardDetailsProduct";
import CustomButton from "../components/CustomButton";

const ProductDetailsScreen = ({ route, productDetails }) => {
  const [product, setProduct] = useState(route.params.product);
  //console.log("route.params.product", route.params.product);
  const { addToCart } = useContext(CartContext);

  // useEffect(() => {
  //   // Récupérer les données du produit depuis l'API
  //   const fetchProduct = async () => {
  //     const productId = route.params.productId;
  //     try {
  //       const response = await getProductById(productId);
  //       const productData = response.data;
  //       //console.log("response.dataaaaaaa", response.data);
  //       setProduct(productData);
  //     } catch (error) {
  //       console.error("Failed to fetch product data:", error);
  //     }
  //   };
  //   fetchProduct();
  // }, []);

  return (
    <ScrollView>
      {product ? (
        <>
          <CustomCardDetailsProduct
            productDetails={product}
            addToCart={addToCart}
          />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

export default ProductDetailsScreen;
