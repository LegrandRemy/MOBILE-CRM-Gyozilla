import React, { useEffect } from "react";
import { Image, ScrollView, View, FlatList, TouchableHighlight } from "react-native";
import {
  Box,
  Heading,
  Text,
  AspectRatio,
} from "native-base";
import ListHomeImgBG from "../Components/ListHomeImgBG";
import SearchHomeInput from "../Components/SearchHomeInput";
import { getAllProducts } from "../utils/api-call/getAllProducts";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  // const carouselData = [
  //   { id: "1", title: "C'est dans la boite !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
  //   { id: "2", title: "Ça croustille !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
  //   { id: "3", title: "Non mais tu bacon !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
  // ];


  const renderNewsCarouselItem = ({ item }) => (
    <View style={{ width: 200, height: 200, marginRight: 30}}>
        <Image source={item.image} style={{ flex: 1, width: 200, height: 200}} resizeMode="contain"/>
        <Text style={{ fontWeight: "bold"}}>{item.name}</Text>
    </View>
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
          <TouchableHighlight>
            <AspectRatio w="90%" ratio={16 / 9}>
                <Image borderRadius={10} source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
              }} alt="image" />
            </AspectRatio>
          </TouchableHighlight>
        </Box>
        <Box backgroundColor={"blue"} marginLeft={4}>
          <Heading color="black" fontSize={18} marginTop={4}>
            Chaud devant !
          </Heading>
          <Text color="black">
            Découvrez les actualités Gyozilla®
          </Text>
          <FlatList
          data={products}
          renderItem={renderNewsCarouselItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
          <Heading color="black" width={250} fontSize={18} marginTop={20}>
            Une petite ou une grosse faim ? &#127836;
          </Heading>
          <Box flexDirection={"row"} flexWrap={"wrap"} marginRight={4} justifyContent={"center"} marginTop={10} marginBottom={10}>
            <ListHomeImgBG props={carouselData}/>
          </Box>
        </Box>
      </ScrollView>
  );
};

export default Home;
