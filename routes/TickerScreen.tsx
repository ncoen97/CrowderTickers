import React, { useCallback, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { useObject, useRealm } from '@realm/react'
import { Ticker, TickerPrice } from '../storage/models'
import { getTicker } from '../api/https/binance'
import { storeTicker } from '../storage/crud'
import { useWebSocket } from '../hooks/useWebSocket'
import { baseUrl } from '../api/websockets/binance'

type TickerScreenRouteProp = RouteProp<RootStackParamList, 'Ticker'>

const TickerScreen = () => {
  const realm = useRealm()
  const route = useRoute<TickerScreenRouteProp>()
  const { symbol } = route.params
  const tickerDetails = useObject(Ticker, symbol)
  const tickerPrice = useObject(TickerPrice, symbol)

  const onTickerUpdate = useCallback(
    (data: any) => storeTicker(realm, data),
    // Don't need to update this callback every time the realm instance changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  useWebSocket(`${baseUrl}/${symbol}@miniTicker`, onTickerUpdate)

  useEffect(() => {
    // We get the Ticke on initial load
    getTicker(symbol).then(({ data }) => storeTicker(realm, data))
    // Don't need to run this effect every time the realm instance changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol])

  return (
    <View style={styles.root}>
      <Text>Ticker ID: {symbol}</Text>
      <Text>{JSON.stringify(tickerDetails || tickerPrice, null, 2)}</Text>
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
