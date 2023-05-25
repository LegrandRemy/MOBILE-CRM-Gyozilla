<<<<<<< HEAD
import { useNavigation } from "@react-navigation/native"
=======
import { useNavigation } from '@react-navigation/native';
>>>>>>> b106352068ecb673131fb66a0a579b869b4f81c8

const RedirectTo = (propsNameScreen, propsIdItem) => {
    const navigation = useNavigation()
    
    navigation.navigate(`${propsNameScreen}`, { id: `${propsIdItem}` });
}

export default RedirectTo