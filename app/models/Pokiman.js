export class Pokiman {
    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.nickname = data.nickname
        this.img = data.img
        this.weight = data.weight
        this.height = data.height
        this.types = data.types
        this.creatorId = data.creatorId
    }

    static wildListTemplate(pokemon) {
        return `<p role="button" onclick="app.WildPokimanController.getActivePokiman('${pokemon.name}')" class="text-light selectable py-2 mb-1">${pokemon.name}</p>`
    }

    get ActivePokimanTemplate(){
        return `
            <div class="card col-11 p-1">
                <h1 class="fw-bold text-center">${this.name} </h1>
                <h4 class="text-dark text-center">${this.weight} | ${this.height} | ${this.types} </h4>
                <hr />
                <button class="btn btn-success" title="Catch ${this.name}!">Caught!</button>
            </div>
        `
    }
}
