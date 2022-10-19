import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'

export const Modal = ({ children, open, onClose = () => {} }) => {
  if (!open) return null

  return (
    <View
      style={tw`absolute top-0 bottom-0 left-0 right-0 bg-black/50 z-10 p-4 justify-center`}
    >
      <View style={tw`relative bg-white p-4 rounded`}>
        <Pressable onPress={onClose} style={tw`absolute right-4 top-4`}>
          <Text>╳</Text>
        </Pressable>
        {children}
      </View>
    </View>
  )
}
