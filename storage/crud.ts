import Realm from 'realm'
import { ITicker, ITickerPrice } from '../types/binance'

export const storeTickerPrices = (realm: Realm, data: ITickerPrice[]) => {
  realm.write(() => {
    // console.log(Date.now(), 'Storing TickerPrices ')
    data.forEach((ticker) => {
      realm.create('TickerPrice', ticker, Realm.UpdateMode.Modified)
    })
  })
}

export const storeTicker = (realm: Realm, data: ITicker) => {
  realm.write(() => {
    // console.log(Date.now(), 'Storing Ticker ', data.symbol)
    realm.create('Ticker', data, Realm.UpdateMode.Modified)
  })
}
