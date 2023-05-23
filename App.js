import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import BottomNav from "./src/Components/TapBar";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useState } from "react";
import Loader from "./src/Components/loader";
import { NativeBaseProvider } from 'native-base';
import Header from "./src/templates/header/Header";

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
    
      <PaperProvider theme={theme}>
        <NativeBaseProvider>
        <StatusBar translucent={false} style="light"></StatusBar>
        <NavigationContainer>
          {!load ? <Loader></Loader> : <BottomNav></BottomNav>}
        </NavigationContainer>
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
