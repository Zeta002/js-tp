let civilite = document.querySelectorAll(".civilite")
let nom = document.getElementById("name")
let prenom = document.getElementById("firstname")
let email = document.getElementById("email")
let tel = document.getElementById("tel")
let address = document.getElementById("address")
let postalCode = document.getElementById("postal-code")
let city = document.getElementById("city")
let cardType = document.querySelectorAll(".cb-type")
let cardNumber = document.getElementById("card-number")
let securityCode = document.getElementById("security-code")

const form = document.querySelector("form")
const submitBtn = document.getElementById("submit-btn")

function verifCivilite() {
    let cptFalseLapCivilite = 0
    for(let i of civilite) {
        if(i.checked === true) {
            const labelCivilite = document.querySelector(`label[for=${i.id}]`)
            return labelCivilite ? labelCivilite.textContent : ''
        } else {
            cptFalseLapCivilite++
        }
        if(cptFalseLapCivilite === civilite.length) {
            alert("Veuillez choisir une civilité")
            return
        }
    }
}

function verifCardType() {
    let cptFalseLapCardType = 0
    for(let i of cardType) {
        if(i.checked === true) {
            const labelCardNumber = document.querySelector(`label[for=${i.id}]`)
            return labelCardNumber ? labelCardNumber.textContent : ''
        } else {
            cptFalseLapCardType++
        }
        if(cptFalseLapCardType === cardType.length) {
            alert("Veuillez choisir un type de carte")
            return
        }
    }
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()

    let finalCivilite = verifCivilite()
    if(finalCivilite === undefined) return
    let finalCardType = verifCardType()
    if(finalCardType === undefined) return

    if(verifCivilite() === undefined) {
        alert("Veuillez choisir une civilité")
        return
    } else if(verifCardType() === undefined) {
        alert("Veuillez choisir un type de carte")
        return
    } else if(nom.value === "") {
        alert("Veuillez renseigner votre nom")
        return
    } else if(prenom.value === "") {
        alert("Veuillez renseigner votre prénom")
        return
    } else if(email.value === "") {
        alert("Veuillez renseigner votre email")
        return
    } else if(tel.value === "") {
        alert("Veuillez renseigner votre numéro de téléphone")
        return
    } else if(address.value === "") {
        alert("Veuillez renseigner votre adresse")
        return
    } else if(postalCode.value === "") {
        alert("Veuillez renseigner votre code postal")
        return
    } else if(city.value === "") {
        alert("Veuillez renseigner votre ville")
        return
    } else if(cardNumber.value === "") {
        alert("Veuillez renseigner votre numéro de carte")
        return
    } else if(securityCode.value === "") {
        alert("Veuillez renseigner votre code de sécurité")
        return
    }
    form.submit()
})