import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'

type TickerScreenRouteProp = RouteProp<RootStackParamList, 'Ticker'>

const TickerScreen = () => {
  const route = useRoute<TickerScreenRouteProp>()
  const { symbol } = route.params

  return (
    <View style={styles.root}>
      <Text>Ticker ID: {symbol}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 24,
  },
})

export default TickerScreen
