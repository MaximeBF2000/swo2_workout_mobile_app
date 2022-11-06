import tw from 'twrnc'
import { View, Text } from 'react-native'
import { Calendar } from '../components'
import moment from 'moment'

export const CalendarScreen = ({ navigation }) => {
  const navigateToDayTraining = date => {
    navigation.navigate('DayTraining', {
      date: moment(date).format('DD/MM/YYYY')
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
