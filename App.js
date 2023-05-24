import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BottomNav from "./src/Components/TapBar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useState } from "react";
import Loader from "./src/Components/loader";
import { NativeBaseProvider } from "native-base";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F8A500",
    secondary: "#CDE8E7",
  },
  roundness: 10,
};
export default function App() {
  const [load, setLoad] = useState(false);
  const inter = () => {
    if (!load) {
      setLoad(true);
    }
  };
  setTimeout(inter, 4000);
  return (
    <NativeBaseProvider>
      <PaperProvider theme={theme}>
        <StatusBar translucent={false} style="light"></StatusBar>
        <NavigationContainer>
          {!load ? <Loader></Loader> : <BottomNav></BottomNav>}
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
