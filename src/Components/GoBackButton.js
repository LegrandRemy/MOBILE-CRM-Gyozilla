import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Icon, Text, View } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const GoBackButton = (props) => {
  const navigation = useNavigation();
  console.log("textButton", props);
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[
        {
          width: "50%",
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 15,
        },
        props.customStyleGoBack,
      ]}
    >
      <Icon
        as={MaterialCommunityIcons}
        name="chevron-left"
        size={8}
        color="#5F8D85"
        style={{
          margin: 0,
          padding: 0,
        }}
      />
      <Text
        style={{
          fontWeight: "bold",
          color: "#5F8D85",
          padding: 0,
          margin: 0,
        }}
      >
        {props.textButton}
      </Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
