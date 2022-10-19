import { useEffect } from 'react'
import { isEmpty } from 'lodash'
import { NavigationContainer } from '@react-navigation/native'
import { LocalPhoneStorage } from './src/features/localPhoneStorage'
import { TabNavigator } from './src/features/navigation'
import { StoreProvider, StoreConsumer } from './src/features/store'
import { LoginScreen } from './src/screens'

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <StoreConsumer>
          {({ ...props }) => <Application {...props} />}
        </StoreConsumer>
      </NavigationContainer>
    </StoreProvider>
  )
}

const Application = ({ user, dispatch }) => {
  useEffect(() => {
    async function getUser() {
      const user = await LocalPhoneStorage.getItem('user')
      if (user) dispatch('setUser', user)
    }

    getUser()
  }, [])

  if (isEmpty(user)) return <LoginScreen />

  return <TabNavigator />
}
