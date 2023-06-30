import React, { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import { getProductById } from "../utils/api-call/getProductById";
import { CartContext, CartProvider } from "../utils/context/CartContext";
import { useNavigation } from "@react-navigation/core";
import { Button } from "native-base";
import CustomCardDetailsProduct from "../components/CustomCardDetailsProduct";

const ProductDetailsScreen = ({ route, productDetails }) => {
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigation = useNavigation();

  useEffect(() => {
    // Récupérer les données du produit depuis l'API
    const fetchProduct = async () => {
      const productId = route.params.productId;
      try {
        const response = await getProductById(productId);
        const productData = response.data;
        //console.log("response.dataaaaaaa", response.data);
        setProduct(productData);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };
    fetchProduct();
  }, []);
  const navigateToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View>
      {product ? (
        <>
          <CustomCardDetailsProduct
            productDetails={product}
            addToCart={addToCart}
          />
          <Button title="Aller au panier" onPress={navigateToCart} />
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ProductDetailsScreen;
