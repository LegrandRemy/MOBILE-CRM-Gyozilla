import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useState } from "react";
import Loader from "./src/components/loader";
import { extendTheme, NativeBaseProvider } from "native-base";
import RootStackNavigator from "./src/navigation/RootStackNavigator";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#F8A500",
    },
    secondary: {
      500: "#CDE8E7",
    },
    greengyozilla: {
      500: "#5F8D85",
    },
  },
  config: {
    initialColorMode: "dark",
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: DefaultTheme.roundness,
      },
    },
    Input: {
      baseStyle: {
        borderRadius: DefaultTheme.roundness,
      },
    },
  }, 
});

export default function App() {
  const [load, setLoad] = useState(false);
  const [token, setToken] = useState("")
  

  const inter = () => {
    if (!load) {
      setLoad(true);
    }
  };
  setTimeout(inter, 4000);
  return (
    <NativeBaseProvider theme={theme}>
      <PaperProvider>
        <StatusBar translucent={false} style="light"></StatusBar>
        <NavigationContainer>
          {!load ? <Loader></Loader> : <RootStackNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </NativeBaseProvider>
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
