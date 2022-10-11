import tw from 'twrnc'
import { map } from 'lodash'
import { View, Text } from 'react-native'

export const ErrorDisplayer = ({ errors }) => {
  return (
    <View
      style={tw`mx-4 absolute bottom-8 left-0 right-0 bg-red-500 p-2 rounded`}
    >
      {map(errors, error => (
        <Text key={error} style={tw`text-white leading-5`}>
          {error}
        </Text>
      ))}
    </View>
  )
}
