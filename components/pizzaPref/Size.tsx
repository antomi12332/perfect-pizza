import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function Size() {
  const [selectedSize, setSelectedSize] = useState(12);
  return (
    <View>
      <Text style={styles.title}>Pizza Size</Text>
      <Text style={styles.text}>{selectedSize} inches</Text>
      <Slider
        style={{ width: 200, height: 40, alignSelf: 'center' }}
        minimumValue={9}
        maximumValue={18}
        step={1}
        value={selectedSize}
        onValueChange={setSelectedSize}
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