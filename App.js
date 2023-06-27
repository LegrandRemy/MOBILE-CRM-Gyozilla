import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import { useState } from "react";
import { NativeBaseProvider } from "native-base";
import { UserContext } from './src/utils/context/UserContext';
import { useEffect } from 'react';
import StackDashBoardNavigator from './src/navigation/StackDashBoardNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwtDecode from 'jwt-decode';
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
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const [load, setLoad] = useState(false);


  useEffect(()=>{
    const token = AsyncStorage.getItem('@token');
    if (token) {
      const userDecoded = jwtDecode(token);
      setUser(userDecoded);
      setIsLogged(true)
    }
  }, [isLogged]);


  const inter = () => {
    if (!load) {
      setLoad(true);
    }
  };
  setTimeout(inter, 4000);

  return (
    <PaperProvider theme={theme}>
      <UserContext.Provider 
        value={{
            user: user, 
            setUser : setUser, 
            isLogged : isLogged, 
            setIsLogged :setIsLogged, 
        }}>
        <NativeBaseProvider>
            <StatusBar translucent={false} style="light"></StatusBar>
            <NavigationContainer>
            {!load 
                ? <Loader /> 
                : user.role 
                  ? <StackDashBoardNavigator />
                  : <RootStackNavigator />
              }
            </NavigationContainer>
          </NativeBaseProvider>
        </UserContext.Provider>
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
