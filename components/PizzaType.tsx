import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';


export default function PizzaType() {
  const [quantity, setQuantity] = useState('1');
  const [selectedSize, setSelectedSize] = useState(12);
  const [crustPref, setCrustPref] = useState(2);
  const [sauce, setSauce] = useState(2);
  const [cheese, setCheese] = useState(2);
  const crustLevels: { [key: number]: string } = {
    1: 'Traditional',
    2: 'Airy',
    3: 'Very Airy'
  };
  const sauceLevels: { [key: number]: string } = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Extra Sauce'
  };
  const cheeseLevels: { [key: number]: string } = {
    1: 'Low',
    2: 'Medium',
    3: 'High',
    4: 'Extra Cheese'
  };



  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Pizza Quantity</Text>
        <TextInput
          style={{ height: 40, width: 60, alignSelf: 'center', borderColor: 'gray', borderWidth: 1, textAlign: 'center' }}
          onChangeText={setQuantity}
          value={quantity}
          keyboardType="numeric"
        />

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

        <Text style={styles.title}>Crust Preference</Text>
        <Text style={styles.text}>{crustLevels[crustPref]}</Text>
        <Slider
          style={{ width: 200, height: 40, alignSelf: 'center' }}
          minimumValue={1}
          maximumValue={3}
          step={1}
          value={crustPref}
          onValueChange={setCrustPref}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

        <Text style={styles.title}>Sauce Quantity</Text>
        <Text style={styles.text}>{sauceLevels[sauce]}</Text>
        <Slider
          style={{ width: 200, height: 40, alignSelf: 'center' }}
          minimumValue={1}
          maximumValue={4}
          step={1}
          value={sauce}
          onValueChange={setSauce}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />

        <Text style={styles.title}>Cheese Quantity</Text>
        <Text style={styles.text}>{cheeseLevels[cheese]}</Text>
        <Slider
          style={{ width: 200, height: 40, alignSelf: 'center' }}
          minimumValue={1}
          maximumValue={4}
          step={1}
          value={cheese}
          onValueChange={setCheese}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
        />





      </ScrollView>
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
  },
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