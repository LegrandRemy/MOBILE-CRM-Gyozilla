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
import CustomCardItem from "../Components/CustomCardProduct";
import CustomButton from "../Components/CustomButton";

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
  const [selectedStep, setSelectedStep] = useState(0);

  const { name } = route.params;

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
  };

  const handleProductClick = (productId) => {
    navigation.navigate("ProductScreen", { productId });
  };

  const filteredSteps = ["Entrées", "Plats", "Desserts", "Boissons"];

  const handleStepContinue = () => {
    if (selectedStep < filteredSteps.length - 1) {
      setSelectedStep((prevStep) => prevStep + 1);
    } else {
      // Handle the completion of all steps
      console.log("All steps completed");
    }
  };

  const handleStepBack = () => {
    if (selectedStep > 0) {
      setSelectedStep((prevStep) => prevStep - 1);
    }
  };

  const filteredProducts = products.filter(
    (product) => product.productCategory.name === filteredSteps[selectedStep]
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.intro}>
        <Text>
          Savourez nos meilleurs plats avec un accompagnement au choix et une
          boisson!
        </Text>
      </View>
      {name === "Menus" && !isFiltered ? (
        <View>
          {menus.map((menu) => (
            <TouchableOpacity
              key={menu.id}
              onPress={() => handleMenuClick(menu.id)}
            >
              <Box alignItems="center">
                <Box
                  maxW="80"
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.500",
                  }}
                >
                  <Box></Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        {menu.name}
                      </Heading>
                    </Stack>
                    <AspectRatio w="100%" ratio={16 / 9}>
                      <Image
                        source={{
                          uri: `https://api-gyozilla.onrender.com/${menu.image}`,
                        }}
                        alt="image"
                      />
                    </AspectRatio>
                  </Stack>
                </Box>
              </Box>
            </TouchableOpacity>
          ))}
        </View>
      ) : isFiltered ? (
        <>
          {filteredProducts.map((product) => (
            <CustomCardItem key={product.id} product={product} />
          ))}
          <View style={styles.navigationButtons}>
            {selectedStep > 0 && <CustomButton onPress={handleStepBack} />}
            {selectedStep < filteredSteps.length - 1 && (
              <CustomButton onPress={handleStepContinue} />
            )}
          </View>
        </>
      ) : (
        <Text>Pas chargé</Text>
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
    marginBottom: 15,
    marginLeft: 5,
    marginRight: 5,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },
});
