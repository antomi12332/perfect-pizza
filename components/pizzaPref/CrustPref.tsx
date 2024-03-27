import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';

export default function Crust() {
  const [crustPref, setCrustPref] = useState(2);
  const crustLevels: { [key: number]: string } = {
    1: 'Traditional',
    2: 'Airy',
    3: 'Very Airy'
  };



  return (
    <View>
      <Text style={styles.title}>Crust Preference</Text>
      <Text style={styles.text}>{crustLevels[crustPref]}</Text>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={3}
        step={1}
        value={crustPref}
        onValueChange={setCrustPref}
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