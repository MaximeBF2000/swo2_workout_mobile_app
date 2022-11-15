import tw from 'twrnc'
import { map, get } from 'lodash'
import { Pressable } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { genId } from '../../utils/string'
import {
  ExercicesScreen,
  SeriesScreen,
  WorkoutsScreen,
  TrainingsScreen
} from '../../screens'
import { HeaderEditButton } from '../../components'
import { useLogout } from '../../screens/Login/login.utils'

const Stack = createStackNavigator()

const stackRoutes = [
  {
    name: 'Trainings',
    component: TrainingsScreen,
    options: {
      headerLeft: ({ color }) => {
        const logout = useLogout()

        return (
          <Pressable onPress={logout} style={tw`ml-4`}>
            <Ionicons name="exit-outline" size={24} color={color} />
          </Pressable>
        )
      }
    }
  },
  {
    name: 'Workouts',
    component: WorkoutsScreen,
    options: ({ route }) => ({
      title: get(route, 'params.trainingName')
    })
  },
  {
    name: 'Exercices',
    component: ExercicesScreen,
    options: ({ route }) => ({
      title: get(route, 'params.workoutName')
    })
  },
  {
    name: 'Series',
    component: SeriesScreen,
    options: ({ route }) => ({
      title: get(route, 'params.exerciceName')
    })
  }
]

const screenOptions = { headerRight: HeaderEditButton }

export const TrainingsStackNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Trainings"
        screenOptions={screenOptions}
      >
        {map(stackRoutes, route => (
          <Stack.Screen {...route} key={genId()} />
        ))}
      </Stack.Navigator>
    </>
  )
}
