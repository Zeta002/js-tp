import {Commune} from "./Commune.js";

export class CommuneDetails extends Commune {
    codeCommune
    codeCanton
    codeArrondissement
    codeRegion

    constructor(codeINSEE, codePostal, codeDepartement, nom, region, superficie, codeCommune, codeCanton, codeArrondissement, codeRegion) {
        super(codeINSEE, codePostal, codeDepartement, nom, region, superficie)
        this.codeCommune = codeCommune
        this.codeCanton = codeCanton
        this.codeArrondissement = codeArrondissement
        this.codeRegion = codeRegion
    }

    afficheCommuneDetails() {
        super.afficheCommune()
        console.log(`Code commune : ${this.codeCommune}`);
        console.log(`Code canton : ${this.codeCanton}`);
        console.log(`Code arrondissement : ${this.codeArrondissement}`);
        console.log(`Code région : ${this.codeRegion}`);
    }
}