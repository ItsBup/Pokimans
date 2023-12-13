import { AppState } from "../AppState.js";
import { wildPokimanService } from "../services/WildPokimanService.js";
import { setHTML } from "../utils/Writer.js";


export class WildPokimanController {
  constructor() {
    console.log('wild has loaded')
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
