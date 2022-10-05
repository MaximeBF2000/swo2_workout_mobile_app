import { createStackNavigator } from '@react-navigation/stack'
import { map } from 'lodash'
import { genId } from '../../utils/string'
import {
  ExercicesScreen,
  SeriesScreen,
  SessionsScreen,
  TrainingsScreen
} from '../../screens'
import { BottomBar } from '../../components/BottomBar.component'
import { HeaderEditButton } from '../../components'

const Stack = createStackNavigator()

const stackRoutes = [
  {
    name: 'Trainings',
    component: TrainingsScreen
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
  headerRight: props => <HeaderEditButton {...props} />
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
