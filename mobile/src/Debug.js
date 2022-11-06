import tw from 'twrnc'
import { Text, ScrollView, View } from 'react-native'

export const DebugComponent = ({ value }) => {
  return (
    <View style={tw`p-4`}>
      <ScrollView style={tw`p-4 rounded bg-gray-200`}>
        <Text>{JSON.stringify(value, null, 4)}</Text>
      </ScrollView>
    </View>
  )
}
