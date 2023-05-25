import { useNavigation } from "@react-navigation/native"

const RedirectTo = (propsNameScreen, propsIdItem) => {
    const navigation = useNavigation()
    
    navigation.navigate(`${propsNameScreen}`, { id: `${propsIdItem}` });
}

export default RedirectTo