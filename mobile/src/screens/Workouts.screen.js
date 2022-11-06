import tw from 'twrnc'
import { View } from 'react-native'
import { get, map, isArray, isEmpty } from 'lodash'
import {
  BottomBar,
  EditableListItem,
  ListItem,
  NoTraining
} from '../components'
import { useOnMount, useToggle } from '../hooks'
import { ApiClient, apiUris, useAxiosSWR } from '../features/apiClient'
import { useStore } from '../features/store'

export const WorkoutsScreen = ({ navigation, route }) => {
  const { user, inEditMode, dispatch } = useStore()
  const [showAddWorkout, toggleShowAddWorkout] = useToggle()

  const trainingId = get(route, 'params.trainingId')
  const { data, mutate } = useAxiosSWR(apiUris.workoutsByTraining(trainingId))
  const workouts = get(data, 'workouts', [])

  useOnMount(() => mutate(apiUris.workoutsByTraining(trainingId)))

  const navigateToExercice = (workoutId, workoutName) =>
    navigation.navigate('Exercices', { workoutId, workoutName })

  const createWorkout = async ({ title, description }) => {
    const workout = await ApiClient.createWorkout({
      userId: get(user, 'id'),
      trainingId,
      name: title,
      description
    })

    mutate(apiUris.workoutsByTraining(trainingId))
    toggleShowAddWorkout(false)

    navigation.navigate('Exercices', {
      workoutId: get(workout, 'id'),
      workoutName: get(workout, 'name')
    })
  }

  const editWorkout = () => {}
  const deleteWorkout = () => {}

  return (
    <>
      <View>
        {/* <ListItem title="Workout 1" description="Description 1" /> */}
        {isArray(workouts) && !isEmpty(workouts) ? (
          map(workouts, workout =>
            inEditMode ? (
              <EditableListItem
                key={get(workout, 'id')}
                titlePlaceholder="Title"
                descriptionPlaceholder="Description"
                defaultTitle={get(workout, 'name')}
                defaultDescription={get(workout, 'description')}
                onEdit={() => {}}
                onDelete={() => {}}
                onClose={() => dispatch('toggleEditMode')}
                actions={['edit', 'delete']}
              />
            ) : (
              <ListItem
                key={get(workout, 'id')}
                title={get(workout, 'name')}
                description={get(workout, 'description')}
                onPress={() =>
                  navigateToExercice(get(workout, 'id'), get(workout, 'name'))
                }
              />
            )
          )
        ) : (
          <NoTraining
            emoji="🏋️"
            title="You don't have any workout here 😵"
            subtitle="Click the Add Button to create one now !"
          />
        )}
        {showAddWorkout && (
          <EditableListItem
            titlePlaceholder="Workout title"
            descriptionPlaceholder="Workout description"
            onAdd={createWorkout}
            onClose={() => toggleShowAddWorkout(false)}
            actions={['add']}
          />
        )}
      </View>
      <BottomBar onPress={() => toggleShowAddWorkout(true)} />
    </>
  )
}
