import tw from 'twrnc'
import { View } from 'react-native'
import { Calendar } from '../components'
import { get } from 'lodash'

export const CalendarScreen = ({ navigation }) => {
  const navigateToDayTraining = date => {
    navigation.navigate('DayTraining', {
      date: get(date, 'dateString')
    })
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
