import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

export const pokeApi = new axios.create ({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000
})

class WildPokimanService {
  async getPokimanApi(){
    const response = await pokeApi.get(`pokemon`)
    console.log(response.data)
  }
}

export const wildPokimanService = new WildPokimanService()
