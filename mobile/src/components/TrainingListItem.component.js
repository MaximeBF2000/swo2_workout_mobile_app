import tw from 'twrnc'
import { Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const TrainingListItem = ({ title, description, onPress }) => {
  return (
    <Pressable
      style={tw`bg-white py-4 px-8 border-b border-gray-100`}
      onPress={onPress}
    >
      <Text style={tw`font-medium text-xl`}>{title}</Text>
      {description && <Text style={tw`text-gray-500`}>{description}</Text>}
    </Pressable>
  )
}
