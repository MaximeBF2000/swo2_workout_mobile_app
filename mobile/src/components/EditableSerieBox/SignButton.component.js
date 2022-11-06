import tw from 'twrnc'
import { Pressable, Text } from 'react-native'

export const SignButton = ({ onPress, sign = '+', style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        tw`bg-blue-600 w-12 h-full rounded justify-center items-center`,
        style
      ]}
    >
      <Text style={tw`text-white text-xl`}>{sign}</Text>
    </Pressable>
  )
}
