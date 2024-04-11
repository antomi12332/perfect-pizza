import PizzaType from "@/components/pizzaPreferences/PizzaType";
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SauceRecipe from "@/components/pizzaPreferences/SauceRecipe";
import FlourProtein from "@/components/pizzaPreferences/FlourProtein";

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <Stack.Navigator initialRouteName="PizzaType">
      <Stack.Screen name="Home" component={PizzaType} />
      <Stack.Screen name="Sauce Recipe" component={SauceRecipe} />
      <Stack.Screen name="Flour Protein" component={FlourProtein} />
    </Stack.Navigator>
  )
}