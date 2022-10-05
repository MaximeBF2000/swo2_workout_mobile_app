import tw from 'twrnc'
import { View, ScrollView } from 'react-native'
import { SeriesBox } from '../components'

export const SeriesScreen = ({ navigation }) => {
  return (
    <ScrollView style={tw`px-4 mt-8 mb-12`}>
      <SeriesBox
        title="10/09/2022"
        series={[
          { reps: 12, weight: 20, note: '', spotted: false },
          { reps: 12, weight: 18, note: '', spotted: true },
          { reps: 10, weight: 18, note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="10/09/2022"
        series={[
          { reps: 12, weight: 20, note: '', spotted: false },
          { reps: 12, weight: 18, note: '', spotted: true },
          { reps: 10, weight: 18, note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
      <SeriesBox
        title="10/09/2022"
        series={[
          { reps: 12, weight: 20, note: '', spotted: false },
          { reps: 12, weight: 18, note: '', spotted: true },
          { reps: 10, weight: 18, note: 'struggled', spotted: false }
        ]}
        style={tw`mb-8`}
      />
    </ScrollView>
  )
}
