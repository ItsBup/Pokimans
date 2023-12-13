import { AppState } from '../AppState.js'

const pokeApi = new axios.create ({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  timeout: 8000
})

class SandboxPokimanService {

}

export const sandboxPokimanService = new SandboxPokimanService()
