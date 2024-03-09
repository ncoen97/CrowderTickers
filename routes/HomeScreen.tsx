import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../App' // Adjust the import path as necessary
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  const renderTicker = ({ item }: { item: { symbol: string; price: string } }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Ticker', { symbol: item.symbol })}>
      <Text>
        {item.symbol}: {item.price}
      </Text>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={[{ symbol: 'BTC', price: '1000' }]}
      renderItem={renderTicker}
      keyExtractor={(item) => item.symbol}
      style={styles.root}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    padding: 24,
  },
})

export default HomeScreen
