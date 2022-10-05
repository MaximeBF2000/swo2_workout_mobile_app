import tw from 'twrnc'
import { View, Text, ScrollView } from 'react-native'
import { get } from 'lodash'
import { SeriesBox } from '../components'

export const DayTrainingScreen = ({ route }) => {
  const date = get(route, 'params.day.dateString')

  return (
    <ScrollView style={tw`px-4 mt-8`}>
      {/* <Text>DayTrainingScreen {date}</Text> */}
      <SeriesBox
        title="Push ups"
        series={[
          { reps: 12, weight: 20, note: '', spotted: false },
          { reps: 12, weight: 18, note: '', spotted: true },
          { reps: 10, weight: 18, note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="Pull ups"
        series={[
          { reps: 12, weight: 'PDC', note: '', spotted: false },
          { reps: 12, weight: 'PDC', note: '', spotted: true },
          { reps: 10, weight: 'PDC', note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="Dumbell press"
        series={[
          { reps: 14, weight: 24, note: '', spotted: false },
          { reps: 13, weight: 22, note: '', spotted: true },
          { reps: 11, weight: 22, note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
    </ScrollView>
  )
}
