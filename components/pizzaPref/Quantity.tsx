import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';


export default function Quantity() {
  const [quantity, setQuantity] = useState('1');

  return (
    <View>
      <Text style={styles.title}>Pizza Quantity</Text>
      <TextInput
        style={{ height: 40, width: 60, alignSelf: 'center', borderColor: 'gray', borderWidth: 1, textAlign: 'center' }}
        onChangeText={setQuantity}
        value={quantity}
        keyboardType="numeric"
      />
    </View>
  )
}






const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});