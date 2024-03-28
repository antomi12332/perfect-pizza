import { Button, View, Text } from "react-native";

export default function SauceRecipe({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Here is the sauce recipe</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Flour Protein"
        onPress={() => navigation.navigate('Flour Protein')}
      />
    </View>
  )
}