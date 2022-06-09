import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const initialOperator = ["+", "-", "*", "/"]
const Calculator = () =>  {
    const [ operator, setOperator ] = useState('');
    const [ numberOne, setNumberOne ] = useState('');
    const [ numberTwo, setNumberTwo ] = useState('');


    const calculate = (operator, numberOne, numberTwo) => {
     switch (operator) {
        case "+":
           return parseInt(numberOne) + parseInt(numberTwo)
          break;
        case "-":
            return parseInt(numberOne) - parseInt(numberTwo)
          break;
        case "*":
            return parseInt(numberOne) * parseInt(numberTwo)
          break;
        case "/":
            return parseInt(numberOne) / parseInt(numberTwo)
          break;
      }
    }

  return (
    <>
    <View style={styles.container}>
        <TextInput style={{borderWidth: 1, margin: 10, padding: 20}} placeholder="Num1" onChangeText={newText => setNumberOne(newText)}/>
        <TextInput style={{borderWidth: 1, margin: 10, padding: 10}} placeholder="operator" onChangeText={newText => setOperator(newText)}/>
        <TextInput style={{borderWidth: 1, margin: 10, padding: 20}} placeholder="Num2" onChangeText={newText => setNumberTwo(newText)}/>
    </View>
    <View>
     <Button title="result"   onPress={() => {alert(`the result ${calculate(operator, numberOne, numberTwo)}`);}}/>  
    </View>
    <Text style={{padding: 10, fontSize: 42}}>
      { }
    </Text>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 0,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleText: {
        fontSize: 20,
        fontFamily: "Cochin",
      }
  });
export default Calculator