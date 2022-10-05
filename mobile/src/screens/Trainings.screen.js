import tw from 'twrnc'
import { Pressable, ScrollView, Text, View } from 'react-native'
import {
  BottomBar,
  EditableTraining,
  TextField,
  TrainingListItem
} from '../components'
import { useStore } from '../features/store'
import { useToggle } from '../hooks'

export const TrainingsScreen = ({ navigation }) => {
  const [showAddTraining, toggleShowAddTraining] = useToggle()
  const { showLogin } = useStore()

  const navigate = () => {
    navigation.navigate('Sessions', {})
  }

  const createTraining = () => {
    console.warn({ showLogin })
    // CREATE TRAINING WITH USER_ID OF USER IN ASYNC STORAGE
    // NAVIGATE TO THE CREATED TRAINING
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
