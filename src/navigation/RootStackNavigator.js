import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackLoginRegister from "./StackLoginRegister";
import Header from "../templates/header/Header";
import BottomNav from "../components/TapBar"

const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name="Main"
        component={BottomNav}
      />
      <RootStack.Screen
        name="LoginRegister"
        component={StackLoginRegister}
        options={{ header: () => <Header /> }}
      />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;