import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Box, Heading, Stack } from "native-base";

const CustomCardProduct = ({ product, onClick, menu }) => {
  const navigation = useNavigation();

  return (
    <>
      {product ? (
        <TouchableOpacity onPress={onClick}>
          <Box style={styles.card} key={product.id}>
            <View style={styles.cardText}>
              <Text style={styles.title}>{product.name}</Text>
              <Text style={styles.contenu}>{product.description}</Text>
            </View>
            <View style={styles.cardImage}>
              <Image
                alt="photo d'un plat"
                source={{
                  uri: `https://api-gyozilla.onrender.com/${product.image}`,
                }}
                style={styles.image}
              />
            </View>
          </Box>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onClick}>
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
      )}
    </>
  );
};

export default CustomCardProduct;

const styles = StyleSheet.create({
  cardText: { flex: 1 },
  cardImage: {
    flex: 2,
  },
  card: {
    width: 250,
    height: 150,
    backgroundColor: "white",
    padding: 1,
    margin: 6,
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  contenu: {
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
});
