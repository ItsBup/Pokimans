import { AppState } from "../AppState.js";
import { Pokiman } from "../models/Pokiman.js";
import { api } from "../services/AxiosService.js";
import { wildPokimanService } from "../services/WildPokimanService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokiman(){
  let pokimans = AppState.wildPokimans
  let content = ''
  pokimans.forEach(pokiman => content += Pokiman.wildListTemplate(pokiman));
  setHTML('wild-pokimans-list', content)
}

function _drawActivePokiman(){
  let activePokiman = AppState.activePokiman
  let content = activePokiman.ActivePokimanTemplate
  setHTML('active-pokiman', content)
}

export class WildPokimanController {
  constructor() {
    console.log('wild has loaded')
    this.getPokimanApi()
    AppState.on('wildPokimans', _drawWildPokiman)
    AppState.on('activePokiman', _drawActivePokiman)
  }

  async getPokimanApi(){
    try {
      await wildPokimanService.getPokimanApi()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }  
  }

  async getActivePokiman(pokemonName){
    try {
      await wildPokimanService.getActivePokiman(pokemonName)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}
