import tw from 'twrnc'
import { ScrollView } from 'react-native'
import { get, isEmpty, map } from 'lodash'
import moment from 'moment'
import {
  BottomBar,
  EditableSerieBox,
  NoteModal,
  SeriesBox
} from '../components'
import { useEditSerie, useSerieModals } from '../hooks'
import { apiUris, useAxiosSWR } from '../features/apiClient'
import { useStore } from '../features/store'

export const SeriesScreen = ({ route }) => {
  const exerciceId = get(route, 'params.exerciceId')
  const workoutId = get(route, 'params.workoutId')
  const { user } = useStore()
  const { data: seriesData, mutate } = useAxiosSWR(
    apiUris.seriesByExercice(workoutId, exerciceId)
  )
  const series = get(seriesData, 'series')

  const today = moment(new Date()).format('DD/MM/YYYY')
  const todaySeries = get(series, today)

  const { addSerie, deleteSerie, editSerie, toggleSpoted } = useEditSerie({
    mutate
  })

  const {
    editingSerie,
    addSerieInfo,
    note,
    showGlobalAddSerie,
    toggleShowGlobalAddSerie,
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
      exerciceId,
      workoutId,
      userId: get(user, 'id')
    }

    if (addSerieInfo) {
      const addSerieInfoFormattedDate = addSerieInfo
        ?.split('/')
        ?.reverse()
        ?.map(e => parseInt(e))
        ?.join('-')

      newSerie.date = new Date(addSerieInfoFormattedDate)
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

      <ScrollView style={tw`px-2 mt-8 mb-12`}>
        {!todaySeries && (
          <SeriesBox
            title={today}
            onAddSerie={() => setAddSerieInfo(today)}
            style={tw`mb-8`}
          />
        )}
        {map(series, (seriesByDate, date) => (
          <SeriesBox
            key={date}
            title={date}
            series={seriesByDate}
            style={tw`mb-8`}
            onToggleSpoted={toggleSpoted}
            onShowNote={setNote}
            onEditSerie={serie => setEditingSerie(serie)}
            onAddSerie={() => setAddSerieInfo(date)}
          />
        ))}
      </ScrollView>
      <BottomBar onPress={() => toggleShowGlobalAddSerie(true)} />
    </>
  )
}
