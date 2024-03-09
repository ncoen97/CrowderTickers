import axios from 'axios'
import { ITickerPrice } from '../../types/binance'

const baseUrl = 'https://data-api.binance.vision'

export const getTickerPrices = () => {
  const url = `${baseUrl}/api/v3/ticker/price`
  return axios.get<ITickerPrice[]>(url)
}
