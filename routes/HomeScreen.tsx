import React, { useCallback, useEffect } from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useQuery, useRealm } from '@realm/react'
import { TickerPrice } from '../storage/models'
import { getTickerPrices } from '../api/https/binance'
import { storeTickerPrices } from '../storage/crud'
import { ITickerPrice } from '../types/binance'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const LINE_HEIGHT = 36

const HomeScreen = () => {
  const realm = useRealm()
  const tickerPrices = useQuery(TickerPrice)
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const renderTicker = useCallback(
    ({ item }: { item: ITickerPrice }) => (
      <TouchableOpacity onPress={() => navigation.navigate('Ticker', { symbol: item.symbol })}>
        <Text style={styles.ticker}>
          {item.symbol}: {item.price}
        </Text>
      </TouchableOpacity>
    ),
    [navigation]
  )

  useEffect(() => {
    getTickerPrices().then(({ data }) => storeTickerPrices(realm, data))
  }, [realm])

  return (
    <FlatList
      data={tickerPrices}
      renderItem={renderTicker}
      getItemLayout={(_, index) => ({ length: LINE_HEIGHT, offset: LINE_HEIGHT * index, index })}
      keyExtractor={(item) => item.symbol}
      style={styles.root}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 24,
  },
  ticker: {
    lineHeight: LINE_HEIGHT,
  },
})

export default HomeScreen
