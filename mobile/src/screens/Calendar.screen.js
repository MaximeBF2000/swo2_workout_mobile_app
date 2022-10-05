import tw from 'twrnc'
import { View, Text } from 'react-native'
import { Calendar } from '../components'

export const CalendarScreen = ({ navigation }) => {
  const navigateToDayTraining = day => {
    navigation.navigate('DayTraining', { day })
  }

  return (
    <View>
      <View style={tw`px-4 h-full justify-around`}>
        <Calendar onDayPress={navigateToDayTraining} />
        <View />
      </View>
    </View>
  )
}
