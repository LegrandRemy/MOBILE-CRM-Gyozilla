import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableHighlight } from "react-native";
import {
  Box,
  Heading,
  Text,
} from "native-base";
import ListHomeImgBG from "../../components/ListHomeImgBG";
import SearchHomeInput from "../../components/SearchHomeInput";
import { instanceAxios } from "../../utils/interceptor";
import FlatListNewsCarousel from "../../components/FlatListNewsCarousel";
import LastProductBannerHome from "../../components/LastProductBannerHome";

const Home = () => {
  const [lastNews, setLastNews] = useState();
  const [lastProducts, setLastProducts] = useState();
  useEffect(() => {
    instanceAxios
      .get("products/lastProduct")
      .then((res) => {
        setLastProducts(res.data);
      })
      .catch((error) => {
        setLastProducts([]);
      });
  }, []);

  useEffect(() => {
    instanceAxios
      .get("lastnews")
      .then((res) => {
        setLastNews(res.data);
      })
      .catch((error) => {
        setLastNews([]);
      });
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Box paddingBottom={10} backgroundColor={"#77614c"}>
        <SearchHomeInput />
        <Heading color="#faeccb" fontSize={18} marginLeft={4} marginTop={4}>
          En ce moment
        </Heading>
      </Box>
      <LastProductBannerHome item={lastProducts} />
      <Box backgroundColor={"blue"} marginLeft={4}>
        <Heading color="black" fontSize={18} marginTop={4}>
          Chaud devant !!!!!
        </Heading>
        <Text color="black">Découvrez les actualités Gyozilla®</Text>
        <FlatListNewsCarousel propsData={lastNews} />
        <Heading color="black" width={250} fontSize={18} marginTop={20}>
          Une petite ou une grosse faim ? &#127836;
        </Heading>
        <Box
          flexDirection={"row"}
          flexWrap={"wrap"}
          marginRight={4}
          justifyContent={"center"}
          marginTop={10}
          marginBottom={10}
        >
          <ListHomeImgBG lastNews={lastNews} />
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
