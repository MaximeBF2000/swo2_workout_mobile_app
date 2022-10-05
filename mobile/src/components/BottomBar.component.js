import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useStore } from '../features/store'
import { useToggle } from '../hooks'

export const BottomBar = ({ onPress = () => {} }) => {
  const [playing, togglePlaying] = useToggle()
  const { timer } = useStore()
  return (
    <View
      style={tw`absolute flex-row items-center justify-between bottom-0 w-full bg-white py-4 pl-8 pr-32 border-t border-gray-100`}
    >
      <Text>{timer}</Text>
      <Pressable onPress={togglePlaying}>
        <FontAwesome
          name={playing ? 'stop' : 'play'}
          size={20}
          color="#252525"
        />
      </Pressable>
      <Pressable
        style={tw`absolute bottom-full right-8 w-12 h-12 rounded-full bg-blue-500 border border-blue-600 justify-center items-center`}
        onPress={onPress}
      >
        <Text style={tw`text-white text-2xl`}>+</Text>
      </Pressable>
    </View>
  )
}
