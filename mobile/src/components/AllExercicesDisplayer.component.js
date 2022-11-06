import tw from 'twrnc'
import { Fragment } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'
import { get, isEmpty, map } from 'lodash'
import { BottomBar } from './BottomBar.component'
import { ListItem } from './ListItem.component'
import { AddExercice } from './AddExercice.component'
import { EditableListItem } from './EditableListItem.component'
import { useToggle } from '../hooks'
import { useStore } from '../features/store'
import { ApiClient, useAxiosSWR, apiUris } from '../features/apiClient'

export const AllExercicesDisplayer = ({ navigation, route }) => {
  const { inEditMode } = useStore()
  const [showAddExercice, toggleShowAddExercice] = useToggle()
  const shouldAddToWorkout = get(route, 'params.addToWorkout')
  const workoutId = get(route, 'params.workoutId')

  const { data } = useAxiosSWR(apiUris.exercicesByCategory())
  const exercicesByCategory = get(data, 'exercicesByCategory')

  const backToExercices = () => navigation.goBack()

  const addExercice = async exerciceId => {
    const workout = await ApiClient.addExerciceToWorkout(workoutId, exerciceId)
    backToExercices()
  }

  if (showAddExercice)
    return (
      <AddExercice returnToAllExercice={() => toggleShowAddExercice(false)} />
    )

  return (
    <>
      <ScrollView style={tw`mb-20`}>
        {shouldAddToWorkout && (
          <Pressable style={tw`ml-8 mt-6`} onPress={backToExercices}>
            <Text style={tw`text-lg text-blue-600`}>Back to exercices</Text>
          </Pressable>
        )}
        {map(exercicesByCategory, (exercices, category) => (
          <Fragment key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            {isEmpty(exercices) ? (
              <NoExerciceInCategory />
            ) : (
              map(exercices, exercice =>
                inEditMode ? (
                  <EditableListItem
                    key={get(exercice, 'id')}
                    titlePlaceholder="Exercice title"
                    descriptionPlaceholder="Exercice description"
                    defaultTitle={get(exercice, 'name')}
                    defaultDescription={get(exercice, 'description')}
                    onEdit={() => {}}
                    onDelete={() => {}}
                    actions={['edit', 'delete']}
                    hideCloseButton
                  />
                ) : (
                  <ListItem
                    key={get(exercice, 'id')}
                    title={get(exercice, 'name')}
                    description={get(exercice, 'description')}
                    onPress={
                      shouldAddToWorkout
                        ? () => addExercice(get(exercice, 'id'))
                        : () => {}
                    }
                  />
                )
              )
            )}
          </Fragment>
        ))}
      </ScrollView>
      <BottomBar onPress={() => toggleShowAddExercice(true)} />
    </>
  )
}

const CategoryTitle = ({ children }) => (
  <Text style={tw`mt-6 mb-2 ml-8 text-xl font-bold`}>{children}</Text>
)

const NoExerciceInCategory = () => (
  <View style={tw`px-8`}>
    <Text style={tw`mt-2 italic text-sm`}>There is no exercices here</Text>
  </View>
)
