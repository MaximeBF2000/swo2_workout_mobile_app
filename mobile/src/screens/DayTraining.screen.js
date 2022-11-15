import tw from 'twrnc'
import { ScrollView } from 'react-native'
import moment from 'moment'
import { get, isEmpty, map } from 'lodash'
import {
  BottomBar,
  EditableSerieBox,
  NoteModal,
  SeriesBox
} from '../components'
import { apiUris, useAxiosSWR } from '../features/apiClient'
import { useStore } from '../features/store'
import { useEditSerie, useSerieModals } from '../hooks'

export const DayTrainingScreen = ({ route }) => {
  const date = get(route, 'params.date')
  const { user } = useStore()

  const beginDate = new Date(date)
  const endDate = new Date(moment(date).add(1, 'day').format('YYYY-MM-DD'))
  const { data, mutate } = useAxiosSWR(
    apiUris.seriesByDate(get(user, 'id'), JSON.stringify([beginDate, endDate]))
  )
  const series = get(data, 'series')

  const { addSerie, deleteSerie, editSerie, toggleSpoted } = useEditSerie({
    mutate
  })

  const {
    editingSerie,
    addSerieInfo,
    note,
    showGlobalAddSerie,
    closeGlobalModal,
    closeEditingModal,
    closeAddModal,
    closeEditingModalAfter,
    closeGlobalModalAfter,
    closeAddModalAfter,
    setAddSerieInfo,
    setEditingSerie,
    setNote
  } = useSerieModals()

  const addNewSerie = async ({ weight, reps, note, spoted }) => {
    const newSerie = {
      weight,
      reps,
      note,
      spoted,
      date: new Date(date),
      userId: get(user, 'id')
    }

    if (addSerieInfo) {
      newSerie.exerciceId = get(addSerieInfo, 'exerciceId')
      newSerie.workoutId = get(addSerieInfo, 'workoutId')
    }

    await addSerie(newSerie)
  }

  return (
    <>
      {!isEmpty(editingSerie) && (
        <EditableSerieBox
          modalTitle="Edit Serie"
          defaults={editingSerie}
          onSave={closeEditingModalAfter(editSerie)}
          onDelete={closeEditingModalAfter(deleteSerie)}
          onClose={closeEditingModal}
          actions={['save', 'delete']}
        />
      )}
      {showGlobalAddSerie && (
        <EditableSerieBox
          modalTitle="Add Serie"
          onSave={closeGlobalModalAfter(addNewSerie)}
          onClose={closeGlobalModal}
        />
      )}
      {addSerieInfo && (
        <EditableSerieBox
          modalTitle="Add serie"
          onSave={closeAddModalAfter(addNewSerie)}
          onClose={closeAddModal}
        />
      )}
      {note && <NoteModal note={note} onClose={() => setNote(null)} />}

      <ScrollView style={tw`px-4 mt-8`}>
        {map(series, (seriesByExercice, exercice) => (
          <SeriesBox
            key={exercice}
            title={exercice}
            series={seriesByExercice}
            style={tw`mb-8`}
            onToggleSpoted={toggleSpoted}
            onShowNote={setNote}
            onEditSerie={serie => setEditingSerie(serie)}
            onAddSerie={() => {
              setAddSerieInfo({
                exerciceId: get(seriesByExercice, '0.exercice.id'),
                workoutId: get(seriesByExercice, '0.workoutId')
              })
            }}
          />
        ))}
      </ScrollView>
      <BottomBar showAddButton={false} />
    </>
  )
}
