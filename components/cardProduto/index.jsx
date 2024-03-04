import { Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./style";

export default function CardProduto({ produto }) {
  return (
    <View style={styles.pedidos}>

        <View style={styles.cardProduto}>
            

            <View style={styles.produtoData}>
                <Text style={styles.title}>{produto.nome}</Text>
                <Text>
                    <Image style={styles.fire} 
                    source={{ uri:  '../../assets/fire.png'}} />   
                    {produto.calorias} Calorias
                </Text>
                <Text style={styles.price}>$ {produto.preco.toFixed(2)}</Text>
            </View>


            <Image style={styles.thumb} source={{ uri: produto.imagePath }} />

        </View>

    </View>
)}