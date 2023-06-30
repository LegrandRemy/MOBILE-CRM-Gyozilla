import React from "react";
import { Icon, Box, Image, IconButton, Menu, Pressable } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const { user, isLogged } = useContext(UserContext);
  const navigation = useNavigation();

  const handleLogOut = () => {
    AsyncStorage.removeItem("@token");
    navigation.navigate("LoginRegister");
  };

  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      {user && user.role ? (
        <Box
          style={{
            paddingTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: 100,
            backgroundColor: "#1d292b",
          }}
        >
          <Image
            marginTop={10}
            source={require("../../../assets/logo_gyozilla.png")}
            alt="Logo"
            style={{ marginLeft: 10, width: "25%", height: 100 }}
          />
          <Box
            marginRight={4}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>
              {user.lastname} {user.firstname}
            </Text>
            <Menu
              w="140"
              trigger={(triggerProps) => {
                return (
                  <Pressable
                    accessibilityLabel="Plus d'options"
                    {...triggerProps}
                  >
                    <Icon
                      as={MaterialCommunityIcons}
                      name="chevron-down"
                      size={"md"}
                      color="white"
                      marginTop={1}
                    />
                  </Pressable>
                );
              }}
            >
              <Menu.Item onPress={handleLogOut}>Déconnexion</Menu.Item>
              <Menu.Item onPress={() => handlePress("HomeDashBoard")}>
                Dashboard
              </Menu.Item>
            </Menu>
          </Box>
        </Box>
      ) : (
        <Box
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            height: 70,
            backgroundColor: "#77614c",
          }}
        >
          <IconButton
            width={"30%"}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="account"
                size="xl"
                color="#faeccb"
              />
            }
            onPress={() => handlePress("LoginRegister")}
          />
          <Image
            source={require("../../../assets/logo_gyozilla.png")}
            alt="Logo"
            style={{ width: 100, height: 90, marginTop: 15 }}
          />
          <IconButton
            width={"30%"}
            icon={
              <Icon
                as={MaterialCommunityIcons}
                name="cart"
                size="xl"
                color="#faeccb"
              />
            }
            onPress={() => handlePress("Cart")}
          />
        </Box>
      )}
    </>
  );
};

export default Header;
