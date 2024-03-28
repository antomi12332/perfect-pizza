import { Button, View, Text } from "react-native";

export default function FlourProtein({ navigation }: { navigation: any }) {
  return (
    <View>
      <Text>Flour Protein</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}