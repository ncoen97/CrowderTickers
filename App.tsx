import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import HomeScreen from './routes/HomeScreen'
import TickerScreen from './routes/TickerScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type RootStackParamList = {
  Home: undefined
  Ticker: { symbol: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Ticker" component={TickerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
