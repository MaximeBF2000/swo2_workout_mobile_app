import tw from 'twrnc'
import { ScrollView } from 'react-native'
import { map, get, isArray, isEmpty } from 'lodash'
import {
  BottomBar,
  EditableListItem,
  ListItem,
  NoTraining
} from '../components'
import { apiUris, useAxiosSWR } from '../features/apiClient'
import { useOnMount } from '../hooks'
import { useStore } from '../features/store'

export const ExercicesScreen = ({ navigation, route }) => {
  const workoutId = get(route, 'params.workoutId')
  const { inEditMode } = useStore()
  const { data, mutate } = useAxiosSWR(apiUris.exercicesByWorkout(workoutId))
  const exercices = get(data, 'exercices')

  useOnMount(() => mutate(apiUris.exercicesByWorkout(workoutId)))

  const addExercice = () => {
    navigation.navigate('AllExercices', { addToWorkout: true, workoutId })
  }

  const navigateToSerie = (exerciceId, exerciceName) =>
    navigation.navigate('Series', { workoutId, exerciceId, exerciceName })

  return (
    <>
      <ScrollView>
        {isArray(exercices) && !isEmpty(exercices) ? (
          map(exercices, exercice =>
            inEditMode ? (
              <EditableListItem
                key={get(exercice, 'id')}
                titlePlaceholder="Title"
                descriptionPlaceholder="Description"
                defaultTitle={get(exercice, 'name')}
                defaultDescription={get(exercice, 'description')}
                onEdit={() => {}}
                onDelete={() => {}}
                onClose={() => dispatch('toggleEditMode')}
                actions={['delete']}
              />
            ) : (
              <ListItem
                key={get(exercice, 'id')}
                title={get(exercice, 'name')}
                description={get(exercice, 'description')}
                onPress={() =>
                  navigateToSerie(get(exercice, 'id'), get(exercice, 'name'))
                }
              />
            )
          )
        ) : (
          <NoTraining
            emoji="🏋️"
            title="You don't have any exercice here 😵"
            subtitle="Click the Add Button to create one now !"
          />
        )}
      </ScrollView>
      <BottomBar onPress={addExercice} />
    </>
  )
}
