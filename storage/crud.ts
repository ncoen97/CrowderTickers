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

export const storeTickers = (realm: Realm, data: ITicker[]) => {
  realm.write(() => {
    console.log(Date.now(), 'Storing Tickers')
    data.forEach((ticker) => {
      console.log(ticker.symbol)
      realm.create('Ticker', ticker, Realm.UpdateMode.Modified)
      realm.create('TickerPrice', { symbol: ticker.symbol, price: ticker.lastPrice }, Realm.UpdateMode.Modified)
    })
  })
}
