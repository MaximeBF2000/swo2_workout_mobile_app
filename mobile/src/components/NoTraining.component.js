import tw from 'twrnc'
import { View, Text } from 'react-native'

export const NoTraining = ({ emoji, title, subtitle }) => {
  return (
    <View style={tw`absolute mt-50 px-6`}>
      <Text style={tw`mb-4 text-8xl text-center`}>{emoji}</Text>
      <Text style={tw`mb-8 text-xl font-bold `}>{title}</Text>
      <Text style={tw`text-base text-center`}>{subtitle}</Text>
    </View>
  )
}
