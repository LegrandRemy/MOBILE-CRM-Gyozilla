import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useState } from "react";
import { UserContext } from "./src/utils/context/UserContext";
import { useEffect } from "react";
import StackDashBoardNavigator from "./src/navigation/StackDashBoardNavigator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import Loader from "./src/components/loader";
import { extendTheme, NativeBaseProvider } from "native-base";
import RootStackNavigator from "./src/navigation/RootStackNavigator";

const theme = extendTheme({
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F8A500",
    secondary: "#CDE8E7",
  },
  roundness: 10,
  components: {
    Radio: {
      baseStyle: {
        _control: {
          _checked: {
            bg: "#F8A500", // Couleur du cercle lorsqu'il est cochée
            borderColor: "#F8A500", // Couleur de la bordure lorsqu'il est cochée
          },
        },
      },
    },
  },
});

export default function App() {
  const [user, setUser] = useState([]);
  const [isLogged, setIsLogged] = useState(false);
  const [load, setLoad] = useState(false);

  const inter = () => {
    if (!load) {
      setLoad(true);
    }
  };
  setTimeout(inter, 4000);

  return (
    <PaperProvider theme={theme}>
      <NativeBaseProvider>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
            isLogged: isLogged,
            setIsLogged: setIsLogged,
          }}
        >
          <StatusBar translucent={false} style="light"></StatusBar>
          <NavigationContainer>
            {!load ? (
              <Loader />
            ) : user && user.role ? (
              <StackDashBoardNavigator />
            ) : (
              <RootStackNavigator />
            )}
          </NavigationContainer>
        </UserContext.Provider>
      </NativeBaseProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
