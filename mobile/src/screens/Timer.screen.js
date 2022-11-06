import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { get } from 'lodash'
import { useTimer } from '../hooks'

export const TimerScreen = () => {
  const {
    value: timer,
    formatted: formattedTimer,
    play,
    pause,
    reset,
    playing
  } = useTimer()

  const handleTimer = () => {
    if (playing) {
      pause()
      return
    } else {
      play()
      return
    }
  }

  return (
    <View style={tw`px-2`}>
      <View
        style={tw`mx-auto mt-20 w-50 h-50 rounded-full justify-center items-center border-8  border-blue-600`}
      >
        <Text style={tw`text-4xl`}>{formattedTimer}</Text>
      </View>
      <View style={tw`flex-row mt-8 mx-auto`}>
        <Pressable onPress={handleTimer} style={tw`mr-8`}>
          <FontAwesome
            name={playing ? 'stop' : 'play'}
            size={32}
            color="#252525"
          />
        </Pressable>
        <Pressable style={tw`mr-4`} onPress={reset}>
          <FontAwesome name="refresh" size={32} color="#252525" />
        </Pressable>
      </View>
    </View>
  )
}
