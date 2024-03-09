export type ITickerPrice = { symbol: string; price: string }

export type ITicker = {
  symbol: string // Symbol Name
  openPrice: string // Opening price of the Interval
  highPrice: string // Highest price in the interval
  lowPrice: string // Lowest  price in the interval
  lastPrice: string // Closing price of the interval
  volume: string // Total trade volume (in base asset)
  quoteVolume: string // Total trade volume (in quote asset)
  openTime: number // Start of the ticker interval
  closeTime: number // End of the ticker interval
  firstId: number // First tradeId considered
  lastId: number // Last tradeId considered
  count: number // Total trade count
}
