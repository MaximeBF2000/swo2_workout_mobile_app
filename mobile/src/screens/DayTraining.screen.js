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
          { reps: 12, weight: 20, note: '', spoted: false },
          { reps: 12, weight: 18, note: '', spoted: true },
          { reps: 10, weight: 18, note: 'struggled', spoted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="Pull ups"
        series={[
          { reps: 12, weight: 'PDC', note: '', spoted: false },
          { reps: 12, weight: 'PDC', note: '', spoted: true },
          { reps: 10, weight: 'PDC', note: 'struggled', spoted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="Dumbell press"
        series={[
          { reps: 14, weight: 24, note: '', spoted: false },
          { reps: 13, weight: 22, note: '', spoted: true },
          { reps: 11, weight: 22, note: 'struggled', spoted: false }
        ]}
        style={tw`mb-8`}
      />
    </ScrollView>
  )
}
