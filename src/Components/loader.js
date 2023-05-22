import { View, Text, Image } from "react-native";
import React from "react";

const loader = () => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Image
        source={require("../../assets/logo_gyozilla.png")}
        style={{
          width: "70%",
          height: "70%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default loader;
