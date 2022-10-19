import tw from 'twrnc'
import { map } from 'lodash'
import { Pressable } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { Ionicons } from '@expo/vector-icons'
import { genId } from '../../utils/string'
import {
  ExercicesScreen,
  SeriesScreen,
  SessionsScreen,
  TrainingsScreen
} from '../../screens'
import { HeaderEditButton } from '../../components'
import { useLogout } from '../../screens/Login/login.utils'
import { useStore } from '../store'

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
    name: 'Sessions',
    component: SessionsScreen
  },
  {
    name: 'Exercices',
    component: ExercicesScreen
  },
  {
    name: 'Series',
    component: SeriesScreen
  }
]

const screenOptions = {
  headerRight: ({ color }) => {
    const { dispatch } = useStore()

    const handlePress = () => dispatch('toggleEditMode')

    return <HeaderEditButton onPress={handlePress} color={color} />
  }
}

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
