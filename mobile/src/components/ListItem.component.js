import tw from 'twrnc'
import { Pressable, Text } from 'react-native'

export const ListItem = ({ title, description, onPress = () => {} }) => {
  return (
    <Pressable
      style={[
        tw`bg-white px-8 border-b border-gray-100`,
        description ? tw`py-4` : tw`py-6`
      ]}
      onPress={onPress}
    >
      <Text style={tw`font-medium text-xl`}>{title}</Text>
      {description && <Text style={tw`text-gray-500`}>{description}</Text>}
    </Pressable>
  )
}
