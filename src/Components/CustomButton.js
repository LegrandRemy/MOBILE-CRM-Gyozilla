import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: "center",
        width: props.width,
        backgroundColor: "#77614c",
        //paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: props.marginTop,
        marginBottom: props.marginBottom,
      }}
    >
      <Text style={{ alignSelf: "center", color: "#faeccb", fontSize: 20 }}>
        {props.textButton}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
