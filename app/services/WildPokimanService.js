import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { Pokiman } from '../models/Pokiman.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

export const pokeApi = new axios.create ({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000
})

class WildPokimanService {
  async getPokimanApi(){
    const response = await pokeApi.get('')
    console.log(response.data)
    AppState.wildPokimans = response.data.results
  }
  async getActivePokiman(pokeName){
    const response = await pokeApi.get(`${pokeName}`)
    console.log('got poke', response.data);
    let activePokiman = new Pokiman(response.data)
    AppState.activePokiman = activePokiman
  }
}

export const wildPokimanService = new WildPokimanService()
