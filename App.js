import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sistema</Text>
      <Text style={styles.title}>Comanda</Text>
      <TextInput style={styles.input} placeholder="email" />
      <TextInput style={styles.input} placeholder='senha' secureTextEntry /> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '121A2C',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    padding:8,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 4
  }

});
