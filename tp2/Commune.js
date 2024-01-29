export class Commune {
    static id = 1
    instanceId
    codeINSEE
    codePostal
    codeDepartement
    nom
    region
    superficie

    constructor(codeINSEE, codePostal, codeDepartement, nom, region, superficie) {
        this.instanceId = Commune.id++
        this.codeINSEE = codeINSEE;
        this.codePostal = codePostal;
        this.codeDepartement = codeDepartement;
        this.nom = nom;
        this.region = region;
        this.superficie = superficie;
    }

    get instanceId() {
        return this.instanceId;
    }

    get codeINSEE() {
        return this.codeINSEE;
    }

    get codePostal() {
        return this.codePostal;
    }

    get codeDepartement() {
        return this.codeDepartement;
    }

    get nom() {
        return this.nom;
    }

    get region() {
        return this.region;
    }

    get superficie() {
        return this.superficie;
    }

    set codeINSEE(value) {
        this.codeINSEE = value;
    }

    set codePostal(value) {
        this.codePostal = value;
    }

    set codeDepartement(value) {
        this.codeDepartement = value;
    }

    set nom(value) {
        this.nom = value;
    }

    set region(value) {
        this.region = value;
    }

    set superficie(value) {
        this.superficie = value;
    }

    afficheCommune() {
        console.log(`ID : ${this.instanceId}`);
        console.log(`Code INSEE : ${this.codeINSEE}`);
        console.log(`Code Postal : ${this.codePostal}`);
        console.log(`Code Département : ${this.codeDepartement}`);
        console.log(`Nom : ${this.nom}`);
        console.log(`Région : ${this.region}`);
        console.log(`Superficie : ${this.superficie}`);
    }
}