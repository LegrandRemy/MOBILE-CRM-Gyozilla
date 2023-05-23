import React from "react";
import { Image, ScrollView, View, FlatList, Dimensions, ImageBackground } from "react-native";
import {
  VStack,
  Box,
  Heading,
  Input,
  Icon,
  NativeBaseProvider,
  Center,
  Text,
  Container,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import ListHomeImgBG from "../Components/ListHomeImgBG";

const Home = () => {

  const carouselData = [
    { id: "1", title: "C'est dans la boite !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
    { id: "2", title: "Ça croustille !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
    { id: "3", title: "Non mais tu bacon !", image: require("../../assets/27682cfc-a16f-4f86-86b3-2d579acf42f7_.webp") },
  ];

  const renderNewsCarouselItem = ({ item }) => (
    <View style={{ width: 200, height: 200, marginRight: 30}}>
        <Image source={item.image} style={{ flex: 1, width: 200, height: 200}} resizeMode="contain"/>
        <Text style={{ fontWeight: "bold"}}>{item.title}</Text>
    </View>
  );
  

  function SearchBar() {
    return (
      <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2" />}>
        <VStack w="100%" space={5} alignSelf="center">
          <Input
            size="md"
            placeholder="Trouver un restaurant"
            width="100%"
            borderRadius="4"
            py="3"
            px="1"
            borderWidth={2}
            borderColor="black"
            fontSize={14}
            placeholderTextColor="black"
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="black"
                as={<MaterialIcons name="search" />}
              />
            }
          />
        </VStack>
      </VStack>
    );
  }

  function SearchStore() {
    return (
      <Center flex={1} px="2">
        <SearchBar />
      </Center>
    );
  }

  return (
    <NativeBaseProvider>
      <ScrollView style={{ backgroundColor: "white" }}>
        <Image
          source={require("../../assets/logo_gyozilla.png")}
          style={{
            marginTop: 10,
            height: 280,
            resizeMode: "contain",
            width: "100%",
          }}
        />
        <SearchStore />
        <Box backgroundColor={"blue"} marginLeft={4}>
          <Heading color="black" fontSize={18} marginTop={4}>
            Chaud devant !
          </Heading>
          <Text color="black">
            Découvrez les actualités Gyozilla®
          </Text>
          <FlatList
          data={carouselData}
          renderItem={renderNewsCarouselItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
        />
          <Heading color="black" width={250} fontSize={18} marginTop={20}>
            Une petite ou une grosse faim ?
          </Heading>
          <Box flexDirection={"row"} flexWrap={"wrap"} marginRight={4} justifyContent={"center"} marginTop={10}>
            <ListHomeImgBG props={carouselData}/>
          </Box>
        </Box>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Home;
