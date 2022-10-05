import { NavigationContainer } from '@react-navigation/native'
import { TabNavigator } from './src/features/navigation/TabNavigator.component'
import { StoreProvider, StoreConsumer } from './src/features/store'
import { LoginScreen } from './src/screens'

export default function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <StoreConsumer>
          {({ showLogin }) => (showLogin ? <LoginScreen /> : <TabNavigator />)}
        </StoreConsumer>
      </NavigationContainer>
    </StoreProvider>
  )
}
