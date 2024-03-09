import Realm from 'realm'

export class TickerPrice extends Realm.Object {
  symbol!: string
  price!: string

  static schema = {
    name: 'TickerPrice',
    primaryKey: 'symbol',
    properties: {
      symbol: 'string',
      price: 'string',
    },
  }
}

export class Ticker extends Realm.Object {
  symbol!: string
  openPrice!: string
  lastPrice!: string
  highPrice!: string
  lowPrice!: string
  volume!: string
  quoteVolume!: string
  openTime!: number
  closeTime!: number
  firstId!: number
  lastId!: number
  count!: number

  static schema = {
    name: 'Ticker',
    primaryKey: 'symbol',
    properties: {
      symbol: 'string',
      openPrice: 'string',
      lastPrice: 'string',
      highPrice: 'string',
      lowPrice: 'string',
      volume: 'string',
      quoteVolume: 'string',
      openTime: 'int',
      closeTime: 'int',
      firstId: 'int',
      lastId: 'int',
      count: 'int',
    },
  }
}
