import tw from 'twrnc'
import { Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { useStore } from '../features/store'

export const HeaderEditButton = ({ color }) => {
  const { dispatch } = useStore()

  const handlePress = () => dispatch('toggleEditMode')

  return (
    <Pressable onPress={handlePress} style={tw`mr-4`}>
      <AntDesign name="edit" size={24} color={color} />
    </Pressable>
  )
}
