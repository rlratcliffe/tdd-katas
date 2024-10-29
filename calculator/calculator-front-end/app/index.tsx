import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";

import { Button } from '@rneui/themed';
import parse from "./parse";

export default function Index() {

const [inputValue, setInputValue] = useState('1/4 + 2/4');
const [calculatedValue, setCalculatedValue] = useState('');

const handleCalculate = () => {
    let fraction = parse.parseInput(inputValue);
    setCalculatedValue(fraction);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50
  },
  box: {
    width: 400,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.label}>Enter simple fraction in `1/4 + 2/4'` format, with same denominators:</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          onChangeText={text => setInputValue(text)}
        />
          <Button size="md"  onPress={handleCalculate} >=</Button>

          <TextInput
            style={styles.input}
            placeholder=""
            value={calculatedValue}
            editable={false}
          />
        </View>
    </View>
  );
}
