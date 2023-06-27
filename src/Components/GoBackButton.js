import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Button, Icon, Text, View } from "native-base";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native";

const GoBackButton = ({ customStyleGoBack }) => {
  const navigation = useNavigation();

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
        customStyleGoBack,
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
        Retour
      </Text>
    </TouchableOpacity>
  );
};

export default GoBackButton;
