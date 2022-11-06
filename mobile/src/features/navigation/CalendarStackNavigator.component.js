import { createStackNavigator } from '@react-navigation/stack'
import { get, map } from 'lodash'
import { genId } from '../../utils/string'
import { CalendarScreen, DayTrainingScreen } from '../../screens'

const Stack = createStackNavigator()

const stackRoutes = [
  {
    name: 'Calendar',
    component: CalendarScreen
  },
  {
    name: 'DayTraining',
    component: DayTrainingScreen,
    options: ({ route }) => ({
      title: get(route, 'params.date')
    })
  }
]

export const CalendarStackNavigator = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="Calendar">
        {map(stackRoutes, route => (
          <Stack.Screen {...route} key={genId()} />
        ))}
      </Stack.Navigator>
    </>
  )
}
