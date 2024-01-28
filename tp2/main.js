import {Member} from "./Member.js"
import {Team} from "./Team.js"

let casali = new Member("Casali", "Alain", "MCF")
let salou = new Member("Salou", "Alexandra", "PR")

let team = new Team()

team.addMember(casali)
team.addMember(salou)

for(let i of team.members) {
    console.log(i.toString())
}