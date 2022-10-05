import tw from 'twrnc'
import { View } from 'react-native'
import { BottomBar, TrainingListItem } from '../components'

export const ExercicesScreen = ({ navigation }) => {
  const navigate = () => {
    navigation.navigate('Series', {})
  }

  const addExercice = () => {}

  return (
    <>
      <View>
        <TrainingListItem
          title="Exercice 1"
          description="Description 1"
          onPress={navigate}
        />
        <TrainingListItem
          title="Exercice 2"
          description="Description 2"
          onPress={navigate}
        />
        <TrainingListItem
          title="Exercice 3"
          description="Description 3"
          onPress={navigate}
        />
        <TrainingListItem
          title="Exercice 4"
          description="Description 4"
          onPress={navigate}
        />
      </View>
      <BottomBar onPress={addExercice} />
    </>
  )
}
