import BackgroundFetch from 'react-native-background-fetch'
import { getTickerPrices } from '../api/https/binance'
import { storeTickerPrices } from '../storage/crud'
import { realmConfig } from '../storage/realmConfig'

const onEvent = async (taskId: string) => {
  console.log('[BackgroundFetch] task: ', taskId)

  const tickerPrices = await getTickerPrices()

  const realm = await Realm.open(realmConfig)

  storeTickerPrices(realm, tickerPrices.data)

  BackgroundFetch.finish(taskId)
}

// Timeout callback is executed when your Task has exceeded its allowed running-time.
// You must stop what you're doing immediately BackgroundFetch.finish(taskId)
const onTimeout = async (taskId: string) => {
  console.warn('[BackgroundFetch] TIMEOUT task: ', taskId)
  BackgroundFetch.finish(taskId)
}

export const initBackgroundFetch = async () => {
  let status = await BackgroundFetch.configure({ minimumFetchInterval: 15 }, onEvent, onTimeout)

  console.log('[BackgroundFetch] configure status: ', status)
}
