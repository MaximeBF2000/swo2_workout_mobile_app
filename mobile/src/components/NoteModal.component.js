import tw from 'twrnc'
import { Text } from 'react-native'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
import { CloseButton } from './EditableSerieBox/CloseButton.component'

export const NoteModal = ({ note, onClose = () => {} }) => {
  return (
    <Animated.View
      style={tw`absolute bottom-0 left-0 right-0 bg-white p-8 border-t border-gray-300 z-10 shadow-lg`}
      entering={SlideInDown.duration(200)}
      exiting={SlideOutDown.duration(200)}
    >
      <CloseButton onClose={onClose} />
      <Text style={tw`mb-8 text-2xl`}>Note</Text>
      <Text>{note}</Text>
    </Animated.View>
  )
}
