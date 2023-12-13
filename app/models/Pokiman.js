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

    static wildListTemplate(pokiman) {
        return `<p class="text-light selectable py-2 mb-1">${pokiman.name}</p>`
    }
}
