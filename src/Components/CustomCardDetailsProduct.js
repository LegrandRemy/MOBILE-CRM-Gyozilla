import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Box } from "react-native-design-utility";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CartContext from "../../utils/context/CartContext";

import AddCardIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AddIcon from "react-native-vector-icons/MaterialIcons";
import RemoveIcon from "react-native-vector-icons/MaterialIcons";

const CustomCardDetailsProduct = ({
  id,
  title,
  name,
  description,
  image,
  price,
  id_product_categories,
  id_menus,
  buttonCardText,
  onButtonCardClick,
  width,
  height,
  border,
  backgroundColor,
  backgroundColorContent,
  backgroundSize,
  widthContent,
  heightContent,
  heightActions,
  widthActions,
  backgroundColorActions,
  justifyContentCard,
  alignItemsCard,
  styleTitle,
  styleParagraph,
  variantButton,
  isProduct,
  zIndex,
}) => {
  let dbImage = "";
  if (image !== undefined) {
    dbImage = "https://api-gyozilla.onrender.com/" + image;
  }

  const [quantity, setQuantity] = useState(1);
  const { updateCartItems } = useContext(CartContext);
  const navigation = useNavigation();
  const [productList, setProductList] = useState([]);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const product = {
      id: id,
      name: name,
      image: image,
      price: price,
      quantity,
    };

    const cart = JSON.parse(localStorage.getItem("cart")) || {};

    if (cart[product.id]) {
      cart[product.id].quantity += quantity;
    } else {
      cart[product.id] = product;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartItems();

    ToastAndroid.show(
      `${quantity} ${name} ${
        quantity === 1 ? "a bien été ajouté" : "ont bien été ajoutés"
      } au panier`,
      ToastAndroid.SHORT
    );
  };

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          if (!isProduct) {
            onButtonCardClick();
          }
        }}
        style={[
          styles.cardProduct,
          {
            width: width,
            height: height,
            backgroundColor: backgroundColor,
            zIndex: zIndex,
          },
        ]}
      >
        <Box
          style={{
            width: widthContent,
            height: heightContent,
            backgroundColor: backgroundColorContent,
            padding: 0,
          }}
        >
          {title && (
            <Box
              style={[
                styles.titleContainer,
                {
                  width: "100%",
                  height: "fit-content",
                },
              ]}
            >
              <Text style={styles.title}>{title}</Text>
            </Box>
          )}
        </Box>
        <TouchableOpacity
          activeOpacity={0.7}
          style={[
            styles.cardImage,
            {
              width: "100%",
              height: heightContent,
              padding: 0,
              backgroundImage: `url(${dbImage})`,
              backgroundSize: backgroundSize,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            },
          ]}
          onPress={() => {
            if (isProduct) {
              const newProduct = {
                id: id,
                name: name,
                description: description,
                price: price,
                image: image,
                category: id_product_categories,
                menu: id_menus,
              };
              const newProductList = [...productList, newProduct];
              setProductList(newProductList);
              navigation.navigate("Product", {
                productList: newProductList,
              });
            }
          }}
        ></TouchableOpacity>

        {isProduct && (
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
        )}
      </TouchableOpacity>
    </>
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
