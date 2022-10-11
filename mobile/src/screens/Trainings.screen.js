import tw from 'twrnc'
import { ScrollView, Text } from 'react-native'
import { BottomBar, EditableTraining, TrainingListItem } from '../components'
import { useStore } from '../features/store'
import { ApiClient } from '../features/apiClient'
import { useToggle } from '../hooks'

export const TrainingsScreen = ({ navigation }) => {
  const { dispatch, user } = useStore()
  const [showAddTraining, toggleShowAddTraining] = useToggle()

  const navigate = () => {
    navigation.navigate('Sessions', {})
  }

  const createTraining = () => {
    // CREATE TRAINING WITH USER_ID OF USER IN ASYNC STORAGE
    // NAVIGATE TO THE CREATED TRAINING
    ApiClient
  }

  return (
    <>
      <ScrollView>
        <TrainingListItem
          title="Training 1"
          description="Description 1"
          onPress={navigate}
        />
        <TrainingListItem
          title="Training 2"
          description="Description 2"
          onPress={navigate}
        />
        <TrainingListItem
          title="Training 3"
          description="Description 3"
          onPress={navigate}
        />
        {showAddTraining && (
          <EditableTraining
            titlePlaceholder="Training title"
            descriptionPlaceholder="Training description"
            onPress={createTraining}
            onClose={() => toggleShowAddTraining(false)}
          />
        )}
      </ScrollView>
      <BottomBar onPress={() => toggleShowAddTraining(true)} />
    </>
  )
}
