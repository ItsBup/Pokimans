import { AppState } from "../AppState.js";
import { Pokiman } from "../models/Pokiman.js";
import { wildPokimanService } from "../services/WildPokimanService.js";
import { setHTML } from "../utils/Writer.js";

function _drawWildPokiman(){
  let pokimans = AppState.wildPokimans
  let content = ''
  pokimans.forEach(pokiman => content += Pokiman.wildListTemplate(pokiman));
  setHTML('wild-pokimans-list', content)
}


export class WildPokimanController {
  constructor() {
    console.log('wild has loaded')
    this.getPokimanApi()
  }

  async getPokimanApi(){
    try {
      await wildPokimanService.getPokimanApi()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}
