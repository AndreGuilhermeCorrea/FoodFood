import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import Button from '../../components/Button/index.jsx';
import CardProduto from '../../components/CardProduto/index.jsx';
import { styles } from './style.js';

const produto1 = {
    "id": 1,
    "nome": "X-Burger",
    "calorias": "190",
    "imagePath": '../../assets/hamburger2.png',
    "preco": 12  
}

const produto2 = {
    "id": 2,
    "nome": "Panquecas",
    "calorias": "170",
    "imagePath": '../../assets/panquecas.png',
    "preco": 15  
}

const produto3 = {
    "id": 3,
    "nome": "Fritas",
    "calorias": "240",
    "imagePath": '../../assets/fritas.png',
    "preco": 6  
}

const produto4 = {
    "id": 4,
    "nome": "Rosquinha",
    "calorias": "70",
    "imagePath": '../../assets/rosca.png',
    "preco": 4  
}

const produto5= {
    "id": 5,
    "nome": "Sorvete",
    "calorias": "70",
    "imagePath": '../../assets/sorvete.png',
    "preco": 3.5  
}

const produto6= {
    "id": 6,
    "nome": "Chicken",
    "calorias": "110",
    "imagePath": '../../assets/chicken.png',
    "preco": 39  
}

export default function Produtos({navigation}) {
    return (
        <View style={styles.containerBetween}>
            <View style={styles.header}>
                <Text style={styles.title}>Produtos</Text>
                </View>
            

            <ScrollView style={styles.scroll}>
                <CardProduto produto={produto1} />
                <CardProduto produto={produto2} />
                <CardProduto produto={produto3} />
                <CardProduto produto={produto4} />
                <CardProduto produto={produto5} />
                <CardProduto produto={produto6} />
            </ScrollView>


            <Button>
                Finalizar
            </Button>
        </View>

    )
}