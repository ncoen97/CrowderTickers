import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { useObject, useRealm } from '@realm/react'
import { Ticker } from '../storage/models'
import { getTicker } from '../api/https/binance'
import { storeTicker } from '../storage/crud'

type TickerScreenRouteProp = RouteProp<RootStackParamList, 'Ticker'>

const TickerScreen = () => {
  const realm = useRealm()
  const route = useRoute<TickerScreenRouteProp>()
  const { symbol } = route.params
  const tickerDetails = useObject(Ticker, symbol)

  useEffect(() => {
    getTicker(symbol).then(({ data }) => storeTicker(realm, data))
  }, [realm, symbol])

  return (
    <View style={styles.root}>
      <Text>Ticker ID: {symbol}</Text>
      <Text>{JSON.stringify(tickerDetails, null, 2)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 24,
    gap: 12,
  },
})

export default TickerScreen
