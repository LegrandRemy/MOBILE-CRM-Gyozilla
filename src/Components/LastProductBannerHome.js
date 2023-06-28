import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AspectRatio, Box, Image, Skeleton } from "native-base";
import { REACT_APP_URL_API } from '@env'

const LastProductBannerHome = ({ item }) => {
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("LastProductsHome", { id: id });
  };
  return (
    <>
      {item && item[0]?.image ? (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          underlayColor="transparent"
        >
          <Image
            width={150}
            height={150}
            borderRadius={10}
            source={{uri: `${REACT_APP_URL_API}${item[0].image}`}}
            alt="image"
          />
        </TouchableOpacity>
      ) : (
        <Box alignItems={"center"} marginY={-8} marginBottom={3}>
          <Skeleton borderRadius={10} width={"90%"} height={200} />
        </Box>
      )}
    </>
  );
};

export default LastProductBannerHome;
