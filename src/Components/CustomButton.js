import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = (props) => {
  console.log("props", props);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignSelf: "center",
        width: "100%",
        backgroundColor: "#77614c",
        paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 50,
      }}
    >
      <Text style={{ color: "#faeccb" }}>{props.textButton}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
