import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    cardProduto: {
        borderColor: '#121A2C55',
        borderWidth: 2,
        borderRadius: 4,
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        marginVertical: 5,
    },
    produtoData: {
        flex: 1,
        alignSelf: 'flex-start',
    },
    thumb: {
        width: 80,
        height: 80,
        borderRadius: 4,
    },

    fire: {
        width: 15,
        height: 15,
        borderRadius: 4,
    },
    title: {
        color: '121A2C',
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        color: '#ffd700',
        fontSize: 18,
        fontWeight: 'bold',
    },
    spinner: {
        flexDirection: 'row',
        backgroundColor: '#D9D9D9',
        borderRadius: 999,
    },
    spinnerMinus: {
        textAlign: 'center',
        backgroundColor: '#E9E9E9',
        borderRadius: 999,
        width: 24,
        height: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
    spinnerPlus: {
        textAlign: 'center',
        backgroundColor: '#121A2C',
        borderRadius: 999,
        width: 24,
        height: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        color: '#FFF',
    },
    spinnerValue: {
        textAlign: 'center',
        width: 24,
        height: 24,
        lineHeight: 24,
    },
    scroll: {
        width: '100%',
    },
})
