export class Member {
    static id = 0
    instanceId
    name
    firstName
    rank

    constructor(name, firstName, rank) {
        this.name = name
        this.firstName = firstName
        this.rank = rank
        this.instanceId = Member.id++
    }

    toString() {
        return `ID: ${this.instanceId}, Prenom: ${this.firstName}, Grade: ${this.rank}`
    }
}