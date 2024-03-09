import React from 'react'
import { View, Text } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'

type TickerScreenRouteProp = RouteProp<RootStackParamList, 'Ticker'>

const TickerScreen = () => {
  const route = useRoute<TickerScreenRouteProp>()
  const { symbol } = route.params

  return (
    <View>
      <Text>Ticker ID: {symbol}</Text>
    </View>
  )
}

export default TickerScreen
