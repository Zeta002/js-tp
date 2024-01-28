let civilite = document.querySelectorAll(".civilite")
let name = document.getElementById("name")
let firstname = document.getElementById("firstname")
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

    let regexNameFirstName = /^[a-zA-Z][a-zA-ZÀ-ÿ-]*[a-zA-ZÀ-ÿ]$/
    let regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/
    let regexTel = /^0[1-9]([-. ]?[0-9]{2}){4}$/
    let regexPostalCode = /^[0-9]{5}$/
    let regexCardNumber = /^[0-9]{16}$/
    let regexSecurityCode = /^[0-9]{3}$/

    if(verifCivilite() === undefined) {
        alert("Veuillez choisir une civilité")
        return
    } else if(verifCardType() === undefined) {
        alert("Veuillez choisir un type de carte")
        return
    } else if(!regexNameFirstName.test(name.value)) {
        alert("Veuillez renseigner un nom valide, il doit commencer par une majuscule ou minuscule, faire plus de 1 caractère, peut contenir un tiret mais pas d'espace et ne peut pas contenir de caractère spéciaux.")
        return
    } else if(!regexNameFirstName.test(firstname.value)) {
        alert("Veuillez renseigner un prénom valide, il doit commencer par une majuscule ou minuscule, faire plus de 1 caractère, peut contenir un tiret mais pas d'espace et ne peut pas contenir de caractère spéciaux.")
        return
    } else if(!regexEmail.test(email.value)) {
        alert("Veuillez renseigner un email valide")
        return
    } else if(!regexTel.test(tel.value)) {
        alert("Veuillez renseigner un numéro de téléphone valide")
        return
    } else if(address.value === "") {
        alert("Veuillez renseigner une addresse valide")
        return
    } else if(!regexPostalCode.test(postalCode.value)) {
        alert("Veuillez renseigner un code postal valide")
        return
    } else if(city.value === "") {
        alert("Veuillez renseigner une ville valide")
        return
    } else if(!regexCardNumber.test(cardNumber.value.trim())) {
        alert("Veuillez renseigner un numéro de carte valide")
        return
    } else if(!regexSecurityCode.test(securityCode.value)) {
        alert("Veuillez renseigner une code de sécurité valide")
        return
    }
    form.submit()
})