import tw from 'twrnc'
import { Pressable, Text } from 'react-native'

export const CloseButton = ({ onClose }) => (
  <Pressable style={tw`absolute right-4 top-10`} onPress={onClose}>
    <Text>╳</Text>
  </Pressable>
)
