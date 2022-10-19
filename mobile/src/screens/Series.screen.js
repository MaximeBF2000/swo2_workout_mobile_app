import tw from 'twrnc'
import { ScrollView } from 'react-native'
import { BottomBar, Modal, SeriesBox } from '../components'
import { map } from 'lodash'

const SERIES_BY_DATES = {
  '10/09/2022': [
    { reps: 12, weight: 20, note: '', spotted: false },
    { reps: 12, weight: 18, note: '', spotted: true },
    { reps: 10, weight: 18, note: 'struggled', spotted: false }
  ],
  '11/09/2022': [
    { reps: 12, weight: 20, note: '', spotted: false },
    { reps: 12, weight: 18, note: '', spotted: true },
    { reps: 10, weight: 18, note: 'struggled', spotted: false }
  ],
  '12/09/2022': [
    { reps: 12, weight: 20, note: '', spotted: false },
    { reps: 12, weight: 18, note: '', spotted: true },
    { reps: 10, weight: 18, note: 'struggled', spotted: false }
  ]
}

export const SeriesScreen = ({ navigation }) => {
  const addExerciceToSession = () => navigation.navigate('Exercices', {})

  return (
    <>
      {/* <Modal open={modalOpen} onClose={() => console.warn('hey')}>
        <Text>Modal</Text>
      </Modal> */}
      <ScrollView style={tw`px-2 mt-8 mb-12`}>
        {map(SERIES_BY_DATES, (seriesByDate, date) => (
          <SeriesBox
            key={date}
            title={date}
            series={seriesByDate}
            style={tw`mb-8`}
          />
        ))}
      </ScrollView>
      <BottomBar onPress={addExerciceToSession} />
    </>
  )
}
