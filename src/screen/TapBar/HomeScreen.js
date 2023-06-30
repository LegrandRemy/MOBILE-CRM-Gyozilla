import React, { useEffect, useState } from "react";
import { Image, ScrollView, TouchableHighlight } from "react-native";
import { Box, Heading, Text, FlatList } from "native-base";
import ListHomeImgBG from "../../components/ListHomeImgBG";
import SearchHomeInput from "../../components/SearchHomeInput";
import { instanceAxios } from "../../utils/interceptor";
import FlatListNewsCarousel from "../../components/FlatListNewsCarousel";
import LastProductBannerHome from "../../components/LastProductBannerHome";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";

const Home = () => {
  const [lastNews, setLastNews] = useState();
  const [lastProducts, setLastProducts] = useState();
  const [randomProducts, setRandomProducts] = useState();
  useEffect(() => {
    instanceAxios
      .get("products/lastProduct")
      .then((res) => {
        setLastProducts(res.data);
      })
      .catch((error) => {
        setLastProducts([]);
      });
    instanceAxios.get("products").then((res) => {
      let data = [];
      do {
        let random = Math.round(Math.random() * res.data.length);
        if (!data.includes(res.data[random])) {
          data.push(res.data[random]);
        }
      } while (data.length < 4);
      setRandomProducts(data);
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
    <ScrollView>
      <Box paddingBottom={10} backgroundColor={"white"}>
        <SearchHomeInput />
        <Heading
          color="#F8A500"
          fontSize={18}
          marginLeft={4}
          marginTop={4}
          marginBottom={-40}
        >
          En ce moment
        </Heading>
        <FlatList
          // marginTop={-65}
          horizontal={true}
          data={lastProducts}
          key={(item) => item.id}
          renderItem={(item) => <LastProductBannerHome item={item} />}
        />
        <LastProductBannerHome item={lastProducts} />
      </Box>
      <Box
        backgroundColor={"white"}
        paddingLeft={4}
        paddingTop={5}
        paddingBottom={8}
      >
        <Heading color="#F8A500" fontSize={18} marginTop={0} marginBottom={2}>
          Ca se passe près de chez vous
        </Heading>
        <Text>Découvrez les dernières actualités Gyozilla®</Text>
        <FlatListNewsCarousel propsData={lastNews} />
      </Box>
      <Box
        backgroundColor={"white"}
        justifyContent={"center"}
        paddingBottom={6}
        paddingLeft={4}
      >
        <Heading
          color="#F8A500"
          width={250}
          fontSize={18}
          marginTop={7}
          marginBottom={4}
        >
          Quel type de gourmand êtes-vous? &#127836;
        </Heading>
        <Box
          display={"flex"}
          flexWrap={"wrap"}
          flexDirection={"row"}
          marginBottom={0}
          paddingLeft={0}
          paddingBottom={0}
          borderRadius={10}
          width={380}
          height={"auto"}
        >
          {/* <ListHomeImgBG lastProducts={randomProducts} /> */}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
