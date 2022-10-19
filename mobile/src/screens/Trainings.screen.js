import { ScrollView } from 'react-native'
import { get, map, isEmpty, isArray } from 'lodash'
import useSWR from 'swr'
import {
  BottomBar,
  EditableTraining,
  NoTraining,
  TrainingListItem
} from '../components'
import { useStore } from '../features/store'
import { ApiClient, axiosGetFetcher } from '../features/apiClient'
import { useOnMount, useToggle } from '../hooks'

export const TrainingsScreen = ({ navigation }) => {
  const { user, inEditMode, dispatch } = useStore()
  const [showAddTraining, toggleShowAddTraining] = useToggle()

  const trainingsUri = `/api/trainings?userId=${get(user, 'id')}`
  const { data, mutate } = useSWR(trainingsUri, axiosGetFetcher)
  const trainings = get(data, 'trainings', [])

  useOnMount(() => mutate(trainingsUri))

  const navigateToSession = trainingId =>
    navigation.navigate('Sessions', { trainingId })

  const toggleEditMode = () => dispatch('toggleEditMode')

  const createTraining = async ({ title, description }) => {
    const training = await ApiClient.createTraining({
      userId: get(user, 'id'),
      name: title,
      description
    })

    mutate(trainingsUri)

    navigation.navigate('Sessions', { trainingId: get(training, 'id') })
  }

  const editTraining = () => {}

  const deleteTraining = () => {}

  return (
    <>
      <ScrollView>
        {isArray(trainings) && !isEmpty(trainings) ? (
          map(trainings, training =>
            inEditMode ? (
              <EditableTraining
                key={get(training, 'id')}
                titlePlaceholder="Title"
                descriptionPlaceholder="Description"
                defaultTitle={training?.name}
                defaultDescription={training?.description}
                onEdit={() => {}}
                onDelete={() => {}}
                onClose={toggleEditMode}
                actions={['edit', 'delete']}
              />
            ) : (
              <TrainingListItem
                key={get(training, 'id')}
                title={get(training, 'name')}
                description={get(training, 'description')}
                onPress={() => navigateToSession(get(training, 'id'))}
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
          <EditableTraining
            titlePlaceholder="Training title"
            descriptionPlaceholder="Training description"
            onPress={createTraining}
            onClose={() => toggleShowAddTraining(false)}
            actions={['add']}
          />
        )}
      </ScrollView>
      <BottomBar onPress={() => toggleShowAddTraining(true)} />
    </>
  )
}
