import { View, Text, Image } from "react-native";
import React from "react";
import GifImage from "@lowkey/react-native-gif";

const Loader = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <GifImage
        source={require("../../assets/noodles.gif")}
        style={{
          alignItems: "center",
          width: "70%",
          height: "70%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};
export default Loader;
