import tw from 'twrnc'
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import { useTimer } from '../hooks'
import { get } from 'lodash'

export const BottomBar = ({ onPress = () => {}, showAddButton = true }) => {
  const navigation = useNavigation()
  const {
    value: timer,
    formatted: formattedTimer,
    play,
    pause,
    reset,
    playing
  } = useTimer()

  const handleTimer = () => {
    if (playing) pause()
    else play()
  }

  const showResetButton =
    (get(timer, 'seconds') !== 0 || get(timer, 'minutes') !== 0) && !playing

  return (
    <Pressable
      style={[
        tw`absolute flex-row items-center justify-between bottom-0 w-full bg-white py-4 pl-8 border-t border-gray-100`,
        showAddButton ? tw`pr-32` : tw`pr-8`
      ]}
      onPress={() => navigation.navigate('Timer')}
    >
      <Text>{formattedTimer}</Text>
      <View style={tw`flex-row`}>
        {showResetButton && (
          <Pressable style={tw`mr-4`} onPress={reset}>
            <FontAwesome name="refresh" size={20} color="#252525" />
          </Pressable>
        )}
        <Pressable onPress={handleTimer}>
          <FontAwesome
            name={playing ? 'stop' : 'play'}
            size={20}
            color="#252525"
          />
        </Pressable>
      </View>
      {showAddButton && (
        <Pressable
          style={tw`absolute bottom-full right-8 w-12 h-12 rounded-full bg-blue-500 border border-blue-600 justify-center items-center`}
          onPress={onPress}
        >
          <Text style={tw`text-white text-2xl`}>+</Text>
        </Pressable>
      )}
    </Pressable>
  )
}
