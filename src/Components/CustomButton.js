import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = (props) => {
  console.log("props", props.textButton);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        alignItems: "center",
        width: "30%",
        backgroundColor: "#77614c",
        //paddingHorizontal: 12,
        paddingVertical: 12,
        borderRadius: 5,
        marginTop: 20,
        marginBottom: 50,
      }}
    >
      <Text style={{ alignSelf: "center", color: "#faeccb" }}>
        {props.textButton}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
