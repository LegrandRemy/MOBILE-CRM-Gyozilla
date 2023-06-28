import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import { useState } from 'react'
import { UserContext } from './src/utils/context/UserContext'
import StackDashBoardNavigator from './src/navigation/StackDashBoardNavigator'
import Loader from './src/components/loader'
import { NativeBaseProvider, extendTheme } from 'native-base'
import RootStackNavigator from './src/navigation/RootStackNavigator'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F8A500',
    secondary: '#CDE8E7',
  },
  roundness: 10,
}

export default function App() {
  const [user, setUser] = useState([])
  const [isLogged, setIsLogged] = useState(false)
  const [load, setLoad] = useState(false)

  const inter = () => {
    if (!load) {
      setLoad(true)
    }
  }
  setTimeout(inter, 4000)

  console.log(user)

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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
