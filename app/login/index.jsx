import { Image, StatusBar, Text, View } from 'react-native'
import { styles } from './style.js'
import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/meditacao3.png')} />
            <Text>Delivery</Text>
            <Text style={styles.title}>FoodFood</Text>
            <Input placeholder="email" />
            <Input placeholder='senha' secureTextEntry />
            <Button onPress={() => navigation.navigate('Comanda')}>ENTRAR</Button>
            <StatusBar style="auto" />
        </View>
    )
}

