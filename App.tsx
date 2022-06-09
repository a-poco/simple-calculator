import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Calculator from './Calculator'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Calculator</Text>    
      <StatusBar style="auto" />
      <Calculator />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 30,
    fontFamily: "Cochin",
    fontWeight: "bold"
  }
});
