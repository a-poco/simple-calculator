import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const initialOperator = ["+", "-", "*", "/"]
const Calculator = () =>  {
    const [ operators, setOperator ] = ("-");
    const [ numberOne, setNumberOne ] = ("");
    const [ numberTwo, setNumberTwo ] = ("");


    const renderOperator = (operator) => {
    switch (operator) {
        case "+":
            setOperator["+"]
          break;
        case "-":
            setOperator["-"]
          break;
        case "*":
            setOperator["*"]
          break;
        case "/":
            setOperator["/"]
          break;
      }
      console.log("Operator ", operator);
    }

  return (
    <>
    <View style={styles.container}>
        <TextInput style={{borderWidth: 1, margin: 10, padding: 4}} placeholder="Num1" />
        <TextInput style={{borderWidth: 1, margin: 10}} placeholder="operator"/>
        <TextInput style={{borderWidth: 1, margin: 10, padding: 4}} placeholder="Num2" />
    </View>
    <View>
     <Button title="result"/>  
    </View>
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