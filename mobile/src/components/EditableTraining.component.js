import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'
import { TextField } from './TextField.component'

export const EditableTraining = ({
  editIcon = '+',
  titlePlaceholder,
  descriptionPlaceholder,
  onPress = () => {},
  onClose = () => {}
}) => {
  return (
    <View
      style={tw`relative flex-row justify-between items-center bg-white py-4 px-8 border-b border-gray-100`}
    >
      <View style={tw`flex-1 mr-12`}>
        <TextField
          placeholder={titlePlaceholder}
          style={tw`font-medium w-full border-0 border-b border-gray-300 rounded mb-2`}
        />
        <TextField
          placeholder={descriptionPlaceholder}
          style={tw`font-medium w-full border-0 border-b border-gray-300 rounded`}
        />
      </View>
      <Pressable
        style={tw`w-8 h-8 rounded-full bg-blue-500 justify-center items-center`}
        onPress={onPress}
      >
        <Text style={tw`text-white text-xl`}>{editIcon}</Text>
      </Pressable>
      <Pressable onPress={onClose} style={tw`absolute top-1 right-2`}>
        <Text style={tw`text-lg`}>&times;</Text>
      </Pressable>
    </View>
  )
}
