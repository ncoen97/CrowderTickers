import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from './routes/HomeScreen'
import TickerScreen from './routes/TickerScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { RealmProvider } from '@realm/react'
import { realmConfig } from './storage/realmConfig'

export type RootStackParamList = {
  Home: undefined
  Ticker: { symbol: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <RealmProvider {...realmConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Tickers' }} />
          <Stack.Screen name="Ticker" component={TickerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RealmProvider>
  )
}

export default App
