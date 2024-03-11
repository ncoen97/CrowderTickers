import BackgroundFetch from 'react-native-background-fetch'
import { getTickers } from '../api/https/binance'
import { storeTickers } from '../storage/crud'
import { realmConfig } from '../storage/realmConfig'
import Realm from 'realm'

const onEvent = async (taskId: string) => {
  console.log('[BackgroundFetch] task: ', taskId)

  const tickers = await getTickers()

  const realm = await Realm.open(realmConfig)

  storeTickers(realm, tickers.data)

  realm.close()

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
