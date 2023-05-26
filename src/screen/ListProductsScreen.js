import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { instanceAxios } from "../utils/interceptor";
import {
  AspectRatio,
  Box,
  Button,
  Heading,
  ScrollView,
  Stack,
} from "native-base";
import CustomCardProduct from "../Components/CustomCardProduct";
import CustomButton from "../Components/CustomButton";
import Loader from "../Components/loader";

const checkNew = (item) => {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);
  return (
    new Date(item.createdAt) >= lastWeek && new Date(item.createdAt) <= today
  );
};

const ListProductsScreen = ({ route, navigation, props }) => {
  const [products, setProducts] = useState([]);
  const [menus, setMenus] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [selectedStep, setSelectedStep] = useState(0);
  const [lastStep, setLastStep] = useState(false);

  const { name } = route.params;
  console.log("route", route);
  console.log("name", name);
  useEffect(() => {
    instanceAxios
      .get("/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    instanceAxios
      .get("/menus")
      .then((response) => {
        setMenus(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [name]);

  useEffect(() => {
    if (products.length !== 0 && !isFiltered) {
      let filteredProducts = [];
      switch (name) {
        case "Menus":
          filteredProducts = products;
          break;
        case "News":
          filteredProducts = products.filter(checkNew);
          setIsFiltered(true);
          break;
        case "Starter":
          filteredProducts = products.filter(
            (product) => product.productCategory.name === "Entrées"
          );
          setIsFiltered(true);
          break;
        case "Dishes":
          filteredProducts = products.filter(
            (product) => product.productCategory.name === "Plats"
          );
          setIsFiltered(true);
          break;
        case "Desserts":
          filteredProducts = products.filter(
            (product) => product.productCategory.name === "Desserts"
          );
          setIsFiltered(true);
          break;
        case "Drinks":
          filteredProducts = products.filter(
            (product) => product.productCategory.name === "Boissons"
          );
          setIsFiltered(true);
          break;
      }
      setProducts(filteredProducts);
    }
  }, [products]);

  const handleMenuClick = (menuId) => {
    setProducts(products.filter((product) => product.id_menus === menuId));
    setIsFiltered(true);
    setSelectedStep(0);
    setIsMenuClicked(true);
  };

  const handleProductClick = (productId) => {
    navigation.navigate("ProductDetailsScreen", { productId });
  };

  const totalSteps = ["Entrées", "Plats", "Desserts", "Boissons"];

  const handleStepContinue = () => {
    if (selectedStep < totalSteps.length - 1) {
      setSelectedStep((prevStep) => prevStep + 1);
    } else {
      setLastStep(true);
    }
  };

  const handleStepBack = () => {
    if (selectedStep > 0) {
      setSelectedStep((prevStep) => prevStep - 1);
    }
  };

  const filteredProducts = products.filter(
    (product) => product.productCategory.name === totalSteps[selectedStep]
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.title}>{route.params.title}</Text>
      </View>
      {name === "Menus" && !isFiltered ? (
        <View>
          {menus.map((menu) => (
            <CustomCardProduct
              menu={menu}
              key={menu.id}
              onClick={() => handleMenuClick(menu.id)}
            />
          ))}
        </View>
      ) : isFiltered ? (
        <>
          {isMenuClicked
            ? filteredProducts.map((product) => (
                <CustomCardProduct
                  key={product.id}
                  product={product}
                  //onClick={handleProductClick}
                />
              ))
            : products.map((product) => (
                <CustomCardProduct
                  key={product.id}
                  product={product}
                  //onClick={handleProductClick}
                />
              ))}
          {isMenuClicked && (
            <View style={styles.navigationButtons}>
              {selectedStep > 0 && (
                <CustomButton onPress={handleStepBack} textButton="retour" />
              )}
              {selectedStep < totalSteps.length - 1 ? (
                <CustomButton
                  onPress={() => handleStepContinue()}
                  textButton={"Continuer"}
                />
              ) : (
                <CustomButton
                  onPress={() => handleStepContinue()}
                  textButton={"Valider"}
                />
              )}
            </View>
          )}
        </>
      ) : (
        <>
          <Text>en attente de produit</Text>
          <Loader />
        </>
      )}
    </ScrollView>
  );
};

export default ListProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  intro: {
    backgroundColor: "#faeccb",
    alignItems: "center",
    margin: 30,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
