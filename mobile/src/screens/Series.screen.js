import tw from 'twrnc'
import { useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { get, isEmpty, map } from 'lodash'
import {
  BottomBar,
  EditableSerieBox,
  NoteModal,
  SeriesBox
} from '../components'
import { useToggle } from '../hooks'
import { ApiClient, apiUris, useAxiosSWR } from '../features/apiClient'
import { useStore } from '../features/store'

const SERIES_BY_DATES = {
  '10/09/2022': [
    { reps: 12, weight: 20, note: '', spoted: true },
    { reps: 10, weight: 18, note: 'struggled', spoted: false }
  ]
}

export const SeriesScreen = ({ route }) => {
  const exerciceId = get(route, 'params.exerciceId')
  const workoutId = get(route, 'params.workoutId')
  const { user } = useStore()
  const [editingSerie, setEditingSerie] = useState(null)
  const [note, setNote] = useState(null)
  const [showGlobalAddSerie, toggleShowGlobalAddSerie] = useToggle()
  const [showAddSerie, toggleShowAddSerie] = useToggle()
  const { data: seriesData } = useAxiosSWR(
    apiUris.seriesByExercice(workoutId, exerciceId)
  )
  const series = get(seriesData, 'series')

  const addSerie = async ({ weight, reps, note, spoted }) => {
    await ApiClient.addSerieToWorkoutAndExercice({
      weight,
      reps,
      note,
      spoted,
      exerciceId,
      workoutId,
      userId: get(user, 'id')
    })
  }

  const addSerieToADay = () => {}

  const editSerie = async serie => await ApiClient.updateSerie(serie)

  const toggleSpoted = async spoted =>
    await ApiClient.updateSerie({ spoted: !spoted })

  return (
    <>
      {!isEmpty(editingSerie) && (
        <EditableSerieBox
          modalTitle="Edit Serie"
          defaults={editingSerie}
          onSave={editSerie}
          actions={['save', 'delete']}
          onClose={() => setEditingSerie(null)}
        />
      )}
      {showGlobalAddSerie && (
        <EditableSerieBox
          modalTitle="Add Serie"
          onSave={addSerie}
          onClose={() => toggleShowGlobalAddSerie(false)}
        />
      )}
      {showAddSerie && (
        <EditableSerieBox
          modalTitle="Add Serie"
          onSave={addSerie}
          onClose={() => toggleShowAddSerie(false)}
        />
      )}
      {note && <NoteModal note={note} onClose={() => setNote(null)} />}
      <Text>No Series here</Text>
      <ScrollView style={tw`px-2 mt-8 mb-12`}>
        {map(series, (seriesByDate, date) => (
          <SeriesBox
            key={date}
            title={date}
            series={seriesByDate}
            style={tw`mb-8`}
            onToggleSpoted={toggleSpoted}
            onShowNote={note => setNote(note)}
            onEditSerie={serie => setEditingSerie(serie)}
            onAddSerie={() => toggleShowAddSerie(true)}
          />
        ))}
      </ScrollView>
      <BottomBar onPress={() => toggleShowGlobalAddSerie(true)} />
    </>
  )
}
