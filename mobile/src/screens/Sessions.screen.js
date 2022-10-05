import tw from 'twrnc'
import { View } from 'react-native'
import { BottomBar, EditableTraining, TrainingListItem } from '../components'
import { useToggle } from '../hooks'

export const SessionsScreen = ({ navigation }) => {
  const [showAddSession, toggleShowAddSession] = useToggle()

  const navigate = () => {
    navigation.navigate('Exercices', {})
  }

  const createSession = () => {}

  return (
    <>
      <View>
        <TrainingListItem
          title="Session 1"
          description="Description 1"
          onPress={navigate}
        />
        <TrainingListItem
          title="Session 2"
          description="Description 2"
          onPress={navigate}
        />
        <TrainingListItem
          title="Session 3"
          description="Description 3"
          onPress={navigate}
        />
        <TrainingListItem
          title="Session 4"
          description="Description 4"
          onPress={navigate}
        />
        {showAddSession && (
          <EditableTraining
            titlePlaceholder="Session title"
            descriptionPlaceholder="Session description"
            onPress={createSession}
            onClose={() => toggleShowAddSession(false)}
          />
        )}
      </View>
      <BottomBar onPress={() => toggleShowAddSession(true)} />
    </>
  )
}
