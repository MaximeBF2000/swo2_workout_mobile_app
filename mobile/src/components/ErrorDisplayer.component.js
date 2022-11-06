import tw from 'twrnc'
import { isArray, map } from 'lodash'
import { View, Text } from 'react-native'

export const ErrorDisplayer = ({ errors }) => {
  if (isArray(errors) && errors.length > 0)
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

  return null
}
