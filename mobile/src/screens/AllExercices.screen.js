import tw from 'twrnc'
import { View, Text, Button } from 'react-native'

export const AllExercicesScreen = ({ navigation }) => {
  return (
    <View style={tw`pt-12 px-2`}>
      <Text>AllExercicesScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  )
}
