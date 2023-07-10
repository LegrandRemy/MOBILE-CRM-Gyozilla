import React from "react";
import {
  Icon,
  Box,
  Image,
  IconButton,
  Menu,
  Pressable,
  Badge,
  VStack,
  HStack,
  Stack,
} from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserContext";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../../utils/context/CartContext";

const Header = () => {
  const { user, isLogged } = useContext(UserContext);
  const navigation = useNavigation();
  const { cartItems, getCartItemCount } = useContext(CartContext);
  const cartItemCount = getCartItemCount();

  //console.log("cartItemCount", cartItemCount);

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
            height: 80,
            backgroundColor: "#1d292b",
          }}
        >
          <Image
            source={require("../../../assets/logo_gyozilla.png")}
            alt="Logo"
            style={{ marginLeft: 10, width: "25%", height: 80, marginTop: -10 }}
          />
          <Box
            marginRight={4}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
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
        <HStack>
          <Box
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              height: 70,
              backgroundColor: "#77614c",
            }}
          >
            <Stack alignItems={"center"} justifyContent={"center"}>
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
            </Stack>
            <Stack>
              <Image
                source={require("../../../assets/logo_gyozilla.png")}
                alt="Logo"
                style={{ width: 100, height: 90, marginTop: 15 }}
              />
            </Stack>
            <VStack alignItems={"center"} justifyContent={"center"}>
              {cartItemCount > 0 && (
                <Badge // bg="red.400"
                  colorScheme="danger"
                  rounded="full"
                  zIndex={1}
                  position={"absolute"}
                  right={3}
                  top={2}
                  variant="solid"
                  alignSelf="flex-end"
                  _text={{
                    fontSize: 10,
                  }}
                >
                  {cartItemCount}
                </Badge>
              )}
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
            </VStack>
          </Box>
        </HStack>
      )}
    </>
  );
};

export default Header;
