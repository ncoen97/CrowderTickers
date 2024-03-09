import Realm from 'realm'
import { ITicker, ITickerPrice } from '../types/binance'

export const storeTickerPrices = (realm: Realm, data: ITickerPrice[]) => {
  realm.write(() => {
    data.forEach((ticker: any) => {
      realm.create('TickerPrice', ticker, Realm.UpdateMode.Modified)
    })
  })
}

export const storeTicker = (realm: Realm, data: ITicker) => {
  realm.write(() => {
    realm.create('Ticker', data, Realm.UpdateMode.Modified)
  })
}
