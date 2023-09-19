import { View, Text, FlatList, Image, TouchableHighlight } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { REACT_APP_URL_API } from "@env";

const FlatListNewsCarousel = ({ propsData }) => {
  const navigation = useNavigation();

  const handlePress = (id) => {
    navigation.navigate("OneNews", { id: id });
  };

  const renderNewsCarouselItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => handlePress(item.id)}
      underlayColor="transparent"
    >
      <View
        key={item.id}
        style={{ width: 250, minHeight: 250, marginRight: 12 }}
      >
        <Image
          source={{ uri: `https://api.gyozilla-restaurants.fr/${item.image}` }}
          style={{
            flex: 1,
            minWidth: 150,
            maxHeight: 180,
            minHeight: 180,
            marginTop: 10,
            borderRadius: 6,
          }}
          resizeMode="cover"
          alt="Image des actualités"
        />
        <Text style={{ fontWeight: "bold", color: "#5F8D85" }}>
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      data={propsData}
      renderItem={renderNewsCarouselItem}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index}
    />
  );
};

export default FlatListNewsCarousel;
