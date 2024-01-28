export class Team {
    members

    constructor() {
        this.members = []
    }

    addMember(member) {
        this.members.push(member)
    }
}