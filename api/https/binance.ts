import axios from 'axios'
import { ITicker, ITickerPrice } from '../../types/binance'

const baseUrl = 'https://data-api.binance.vision'

export const getTickerPrices = () => {
  const url = `${baseUrl}/api/v3/ticker/price`
  return axios.get<ITickerPrice[]>(url).then((res) => {
    // console.log('getTickerPrices', res.status)
    return res
  })
}

export const getTicker = (symbol: string) => {
  const url = `${baseUrl}/api/v3/ticker/24hr?symbol=${symbol}&type=MINI`
  return axios.get<ITicker>(url).then((res) => {
    // console.log('getTicker', symbol, res.status)
    return res
  })
}

export const getTickers = () => {
  const url = `${baseUrl}/api/v3/ticker/24hr`
  return axios.get<ITicker[]>(url).then((res) => {
    console.log('getTickers', res.status)
    return res
  })
}
