import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import CustomCardDetailsProduct from "../components/CustomCardDetailsProduct";
import { getProductById } from "../utils/api-call/getProductById";

const ProductDetailsScreen = ({ route }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Récupérer les données du produit depuis l'API
    const fetchProduct = async () => {
      const productId = route.params.productId;
      try {
        const response = await getProductById(productId);
        const productData = response.data;
        console.log("response.dataaaaaaa", response.data);
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };
    fetchProduct();
  }, []);

  console.log("product", product);

  return (
    <View>
      {product ? (
        <CustomCardDetailsProduct productDetails={product} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
