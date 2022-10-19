import tw from 'twrnc'
import { View, Text } from 'react-native'
import { useTimer } from '../hooks'

export const TimerScreen = () => {
  const { formatted: formattedTimer } = useTimer()

  return (
    <View style={tw`px-2`}>
      <View
        style={tw`mx-auto mt-20 w-50 h-50 rounded-full justify-center items-center border-8  border-blue-600`}
      >
        <Text style={tw`text-4xl`}>{formattedTimer}</Text>
      </View>
    </View>
  )
}
