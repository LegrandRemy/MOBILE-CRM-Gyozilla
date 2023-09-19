import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Box, Image, Skeleton } from "native-base";

const LastProductBannerHome = ({ item }) => {
  const navigation = useNavigation();
  const handlePress = (item) => {
    navigation.navigate("LastProductsHome", { item: item });
  };
  return (
    <>
      {item && item[0]?.image ? (
        <TouchableOpacity
          onPress={() => handlePress(item)}
          underlayColor="transparent"
          style={{ alignItems: "center" }}
        >
          <Image
            width={380}
            height={300}
            borderRadius={10}
            source={{
              uri: `https://api.gyozilla-restaurants.fr/${item[0].image}`,
            }}
            alt="en ce moment"
          />
        </TouchableOpacity>
      ) : (
        <Box alignItems={"center"} marginBottom={3}>
          <Skeleton borderRadius={10} width={"90%"} height={200} />
        </Box>
      )}
    </>
  );
};

export default LastProductBannerHome;
