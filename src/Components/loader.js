import { View, Text, Image } from "react-native";
import React from "react";

const loader = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#faeccb" }}>
      <Image
        source={require("../../assets/logo_gyozilla.png")}
        style={{
          width: "50%",
          height: "50%",
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default loader;
