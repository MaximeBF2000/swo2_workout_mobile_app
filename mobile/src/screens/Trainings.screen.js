import { ScrollView } from 'react-native'
import { get, map, isEmpty, isArray } from 'lodash'
import {
  BottomBar,
  EditableListItem,
  NoTraining,
  ListItem
} from '../components'
import { useStore } from '../features/store'
import { ApiClient, apiUris, useAxiosSWR } from '../features/apiClient'
import { useOnMount, useToggle } from '../hooks'

export const TrainingsScreen = ({ navigation }) => {
  const { user, inEditMode, dispatch } = useStore()
  const [showAddTraining, toggleShowAddTraining] = useToggle()

  const { data, mutate } = useAxiosSWR(apiUris.trainingsByUser(get(user, 'id')))
  const trainings = get(data, 'trainings', [])

  useOnMount(() => mutate(apiUris.trainingsByUser(get(user, 'id'))))

  const navigateToWorkout = (trainingId, trainingName) =>
    navigation.navigate('Workouts', { trainingId, trainingName })

  const createTraining = async ({ title, description }) => {
    const training = await ApiClient.createTraining({
      userId: get(user, 'id'),
      name: title,
      description
    })

    mutate(apiUris.trainingsByUser(get(user, 'id')))
    toggleShowAddTraining(false)

    navigation.navigate('Workouts', {
      trainingId: get(training, 'id'),
      trainingName: get(training, 'name')
    })
  }

  const editTraining = () => {}
  const deleteTraining = () => {}

  return (
    <>
      <ScrollView>
        {isArray(trainings) && !isEmpty(trainings) ? (
          map(trainings, training =>
            inEditMode ? (
              <EditableListItem
                key={get(training, 'id')}
                titlePlaceholder="Title"
                descriptionPlaceholder="Description"
                defaultTitle={get(training, 'name')}
                defaultDescription={get(training, 'description')}
                onEdit={() => {}}
                onDelete={() => {}}
                onClose={() => dispatch('toggleEditMode')}
                actions={['edit', 'delete']}
              />
            ) : (
              <ListItem
                key={get(training, 'id')}
                title={get(training, 'name')}
                description={get(training, 'description')}
                onPress={() =>
                  navigateToWorkout(get(training, 'id'), get(training, 'name'))
                }
              />
            )
          )
        ) : (
          <NoTraining
            emoji="🏋️"
            title="You don't have any training here 😵"
            subtitle="Click the Add Button to create one now !"
          />
        )}
        {showAddTraining && (
          <EditableListItem
            titlePlaceholder="Training title"
            descriptionPlaceholder="Training description"
            onAdd={createTraining}
            onClose={() => toggleShowAddTraining(false)}
            actions={['add']}
          />
        )}
      </ScrollView>
      <BottomBar onPress={() => toggleShowAddTraining(true)} />
    </>
  )
}
