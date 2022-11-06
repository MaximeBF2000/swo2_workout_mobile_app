import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { map } from 'lodash'
import { FontAwesome5, AntDesign, Ionicons, Feather } from '@expo/vector-icons'
import { AllExercicesScreen, TimerScreen } from '../../screens'
import { TrainingsStackNavigator } from './TrainingsStackNavigator.component'
import { CalendarStackNavigator } from './CalendarStackNavigator.component'
import { genId } from '../../utils/string'
import { HeaderEditButton } from '../../components'

const Tabs = createBottomTabNavigator()

const TabsRoutes = [
  {
    name: 'TrainingsTab',
    component: TrainingsStackNavigator,
    options: {
      headerShown: false,
      tabBarLabel: 'Trainings',
      tabBarIcon: ({ color }) => (
        <FontAwesome5 name="dumbbell" size={20} color={color} />
      )
    }
  },
  {
    name: 'CalendarTab',
    component: CalendarStackNavigator,
    options: {
      headerShown: false,
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ color }) => (
        <AntDesign name="calendar" size={24} color={color} />
      )
    }
  },
  {
    name: 'Timer',
    component: TimerScreen,
    options: {
      tabBarLabel: 'Timer',
      tabBarIcon: ({ color }) => (
        <Ionicons name="timer-outline" size={24} color={color} />
      )
    }
  },
  {
    name: 'AllExercices',
    component: AllExercicesScreen,
    options: {
      tabBarLabel: 'Exercices',
      tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />
    }
  }
]

const screenOptions = { headerRight: HeaderEditButton }

export const TabNavigator = () => {
  return (
    <>
      <Tabs.Navigator
        initialRouteName="Trainings"
        screenOptions={screenOptions}
      >
        {map(TabsRoutes, route => (
          <Tabs.Screen {...route} key={genId()} />
        ))}
      </Tabs.Navigator>
    </>
  )
}
