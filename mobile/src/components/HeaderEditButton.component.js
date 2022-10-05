import tw from 'twrnc'
import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export const HeaderEditButton = ({ onPress = () => {}, color, ...props }) => {
  return (
    <Pressable onPress={onPress} style={tw`mr-4`}>
      <AntDesign name="edit" size={24} color={color} />
    </Pressable>
  )
}
