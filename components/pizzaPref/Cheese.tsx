import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function Cheese() {
  const [cheese, setCheese] = useState(2);
  const cheeseLevels: { [key: number]: string } = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Extra Cheese'
  };
  return (
    <View>
      <Text style={styles.title}>Cheese Quantity</Text>
      <Text style={styles.text}>{cheeseLevels[cheese]}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={4}
        step={1}
        value={cheese}
        onValueChange={setCheese}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
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
  text: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});