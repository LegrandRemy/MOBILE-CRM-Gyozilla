import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackLoginRegister from "./StackLoginRegister";
import BottomNav from "../components/TapBar";
import Header from "../templates/header/Header";

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