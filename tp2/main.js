// import {Member} from "./Member.js"
// import {Team} from "./Team.js"
import {Commune} from "./Commune.js"
import {CommuneDetails} from "./CommuneDetails.js"

// let casali = new Member("Casali", "Alain", "MCF")
// let salou = new Member("Salou", "Alexandra", "PR")
//
// let team = new Team()
//
// team.addMember(casali)
// team.addMember(salou)
//
// for(let i of team.members) {
//     console.log(i.toString())
// }

new Commune("123", "456", "789", "nom", "region", "superficie").afficheCommune()
new CommuneDetails("123", "456", "789", "nom", "region", "superficie", "codeCommune", "codeCanton", "codeArrondissement", "codeRegion").afficheCommuneDetails()