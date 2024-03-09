import { IStreamMiniTicker, ITicker, ITickerPrice } from '../../types/binance'

export const baseUrl = 'wss://stream.binance.com:443/ws'

export const mapStreamTickerPrices = (tickerPrices: IStreamMiniTicker[]): ITickerPrice[] =>
  tickerPrices.map((tickerPrice) => ({
    symbol: tickerPrice.s,
    price: tickerPrice.c,
  }))

export const mapStreamTicker = (tickerPrice: IStreamMiniTicker): Partial<ITicker> => ({
  symbol: tickerPrice.s,
  lastPrice: tickerPrice.c,
  highPrice: tickerPrice.h,
  lowPrice: tickerPrice.l,
  openPrice: tickerPrice.o,
  volume: tickerPrice.v,
  quoteVolume: tickerPrice.q,
})
