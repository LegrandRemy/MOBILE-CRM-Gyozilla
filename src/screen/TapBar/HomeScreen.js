import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, FlatList, TouchableHighlight } from "react-native";
import { Box, Heading, Text, AspectRatio } from "native-base";
import ListHomeImgBG from "../../Components/ListHomeImgBG";
import SearchHomeInput from "../../Components/SearchHomeInput";
import { instanceAxios } from "../../utils/interceptor";
import FlatListNewsCarousel from "../../Components/FlatListNewsCarousel";

const Home = () => {
const [lastNews, setLastNews] = useState();

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
      <Box alignItems={"center"} marginY={-8} marginBottom={3}>
        <AspectRatio w="90%" ratio={16 / 9}>
          <Image
            borderRadius={10}
            source={{
              uri: "https://burgerkingfrance.twic.pics/img/animations/09a755b2-d7d0-4cc2-bf8f-3772b87e34cc_?twic=v1/focus=auto/cover=1600x700",
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Box backgroundColor={"blue"} marginLeft={4}>
        <Heading color="black" fontSize={18} marginTop={4}>
          Chaud devant !
        </Heading>
        <Text color="black">Découvrez les actualités Gyozilla®</Text>
        <FlatListNewsCarousel propsData={lastNews}/>
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
          {/* <ListHomeImgBG props={products} /> */}
        </Box>
      </Box>
    </ScrollView>
  );
};

export default Home;
