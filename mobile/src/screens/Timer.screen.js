import tw from 'twrnc'
import { View, Text } from 'react-native'
import { useStore } from '../features/store'

export const TimerScreen = () => {
  const { timer } = useStore()

  return (
    <View style={tw`px-2`}>
      <View
        style={tw`mx-auto mt-20 w-50 h-50 rounded-full justify-center items-center border-8  border-blue-600`}
      >
        <Text style={tw`text-4xl`}>{timer}</Text>
      </View>
    </View>
  )
}
