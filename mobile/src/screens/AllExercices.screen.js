import tw from 'twrnc'
import { ScrollView, Text } from 'react-native'
import { BottomBar, TrainingListItem } from '../components'

export const AllExercicesScreen = ({ navigation }) => {
  const onChoose = () => {}
  const addExercice = () => {}

  return (
    <>
      <ScrollView style={tw`mb-20`}>
        <CategoryTitle>Chest</CategoryTitle>
        <TrainingListItem
          title="Exercice 1"
          description="Description 1"
          onPress={onChoose}
        />
        <TrainingListItem
          title="Exercice 2"
          description="Description 2"
          onPress={onChoose}
        />
        <CategoryTitle>Back</CategoryTitle>
        <TrainingListItem
          title="Exercice 3"
          description="Description 3"
          onPress={onChoose}
        />
        <TrainingListItem
          title="Exercice 4"
          description="Description 4"
          onPress={onChoose}
        />
      </ScrollView>
      <BottomBar onPress={addExercice} />
    </>
  )
}

const CategoryTitle = ({ style, ...props }) => (
  <Text style={[tw`mt-6 mb-2 ml-8 text-xl font-bold`, style]} {...props} />
)
