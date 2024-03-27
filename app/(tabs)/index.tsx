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
    justifyContent: 'center', // aligns items along the main axis (vertically for column direction)
    alignItems: 'center', // aligns items along the cross axis (horizontally for column direction)
    backgroundColor: '#ecf0f1',
    padding: 18,
  },
});