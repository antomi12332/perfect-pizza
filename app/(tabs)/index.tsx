import { ScrollView, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import React from 'react';
import Quantity from '@/components/pizzaPref/Quantity';
import Size from '@/components/pizzaPref/Size';
import Crust from '@/components/pizzaPref/CrustPref';
import Sauce from '@/components/pizzaPref/Sauce';
import Cheese from '@/components/pizzaPref/Cheese';


export default function PizzaType() {

  return (
    <View style={styles.container}>
      <ScrollView>
        <Quantity />
        <Size />
        <Crust />
        <Sauce />
        <Cheese />
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
});