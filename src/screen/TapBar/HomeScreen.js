import React, { useEffect, useState } from "react";
import { Image, ScrollView, View, FlatList, TouchableHighlight } from "react-native";
import { Box, Heading, Text, AspectRatio } from "native-base";
import ListHomeImgBG from "../../Components/ListHomeImgBG";
import SearchHomeInput from "../../Components/SearchHomeInput";
import { instanceAxios } from "../../utils/interceptor";
import RedirectTo from "../../Components/RedirectTo";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
const navigation = useNavigation()
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

  console.log(lastNews);

  const handlePress = () => {
    if (lastNews && lastNews.id) {
      navigation.navigate('OneNews', { id: lastNews.id });
    }
  };

  const renderNewsCarouselItem = ({ item }) => (
    <TouchableHighlight onPress={handlePress} underlayColor="transparent">
    <View key={item.id} style={{ width: 200, height: 200, marginRight: 30 }}>
      <Image
        source={{uri: `https://api-gyozilla.onrender.com/${item.image}`}}
        style={{ flex: 1, minWidth: 150, maxHeight: 150, minHeight: 150, marginTop:10}}
        resizeMode="cover"
      />
      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
    </View>
    </TouchableHighlight>

  );

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
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
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
        <FlatList
          data={lastNews}
          renderItem={renderNewsCarouselItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()} 
        />
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
