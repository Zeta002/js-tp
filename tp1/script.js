// EXERCICE 1
// function surfaceCercle(rayon) {
//     return Math.round(Math.PI * 2 * rayon)
// }
//
// const r1 = parseInt(prompt("Entrez le rayon du premier cercle"))
// const r2 = parseInt(prompt("Entrez le rayon du second cercle"))
//
//
// sr1 = surfaceCercle(r1)
// sr2 = surfaceCercle(r2)
//
// alert("Surface premier cercle: " + sr1)
// alert("Surface second cercle: " + sr2)
//
// // Façon de faire pour affiché pour les développeur
// // console.log("Surface premier cercle: " + surfaceCercle(r1))
// // console.log("Surface second cercle: " + surfaceCercle(r1))
//
// alert("Dfférence entre le premier et second cercle: " + (sr1 - sr2))

// EXERCICE 2
// let name = prompt("Entrez votre nom: ")
// let firstName = prompt("Entrez votre prénom: ")
// let initial = name.substring(0, 1) + "." + firstName.substring(0, 1)
//
// // Faisable avec des alert() si on veut l'affiché à l'utilisateur
// console.log(initial.toUpperCase())
// console.log("Longueur du nom: " + name.length)
// console.log("Longueur du prénom: " + firstName.length)

// EXERCICE 3
// function polynome(a, b, c) {
//     if(a != null || b != null || c != null) {
//         let delta = b**2 - 4*a*c
//         if(delta < 0) {
//             alert("delta est négatif, il n'y à pas de solution.")
//         } else if(delta === 0) {
//             alert("delta est nul, voici la racine unique du polynôme: " + (-b / 2*a))
//         } else {
//             alert("delta est positif, voici les deux racines: " + ((-b - Math.sqrt(delta)) / 2*a) + " ou " + (-b + Math.sqrt(delta)) / 2*a)
//         }
//     } else {
//         alert("Les valeurs que vous avez rentrez ne sont pas correct.")
//     }
// }
//
// const a = prompt("Entrez la valeur A du polynôme: ")
// const b = prompt("Entrez la valeur B du polynôme: ")
// const c = prompt("Entrez la valeur C du polynôme: ")
//
// polynome(a, b, c)

// EXERCICE 4
// while(1) {
//     let monthNumber = prompt("Entrez le nombre de votre mois: ")
//
//     if(monthNumber <= 0 || monthNumber > 12 || isNaN(parseInt(monthNumber))) {
//         alert("La valeur que vous avez entrez n'est pas correct, seuls les nombres entre 1 et 12 sont accepter.")
//     } else {
//         switch(monthNumber) {
//             case "1":
//                 alert("Janvier")
//                 break
//             case "2":
//                 alert("Février")
//                 break
//             case "3":
//                 alert("Mars")
//                 break
//             case "4":
//                 alert("Avril")
//                 break
//             case "5":
//                 alert("Mai")
//                 break
//             case "6":
//                 alert("Juin")
//                 break
//             case "7":
//                 alert("Juillet")
//                 break
//             case "8":
//                 alert("Août")
//                 break
//             case "9":
//                 alert("Septembre")
//                 break
//             case "10":
//                 alert("Octobre")
//                 break
//             case "11":
//                 alert("Novembre")
//                 break
//             case "12":
//                 alert("Décembre")
//                 break
//             default:
//                 alert("Le nombre que vous avez rentrez n'est pas correct.")
//         }
//     }
// }

// Avec un dictionnaire (tableau associatif)
// while(1) {
//     let monthNames = {
//         "1": "Janvier",
//         "2": "Février",
//         "3": "Mars",
//         "4": "Avril",
//         "5": "Mai",
//         "6": "Juin",
//         "7": "Juillet",
//         "8": "Août",
//         "9": "Septembre",
//         "10": "Octobre",
//         "11": "Novembre",
//         "12": "Décembre"
//     }
//
//     let monthNumber = prompt("Entrez le nombre de votre mois: ")
//
//     if(monthNumber <= 0 || monthNumber > 12 || isNaN(parseInt(monthNumber))) {
//         alert("La valeur que vous avez entrez n'est pas correct, seuls les nombres entre 1 et 12 sont accepter.")
//     } else {
//         let monthName = monthNames[monthNumber]
//         if(monthName) {
//             alert(monthName)
//         } else {
//             alert("Le nombre que vous avez rentrez n'est pas correct.")
//         }
//     }
// }

// EXERCICE 5

// let nb = prompt("Entrez le nombre dont vous voulez la table de multiplication: ")
// let nbMultiplication = prompt("Entrez le nombre de multiplication que vous voulez: ")
//
// // Version for
// for(let i = 1; i <= nbMultiplication; i++) {
//     let e = document.createElement("h1")
//     e.innerHTML = (nb + " x " + i + " = " + (nb * i))
//     document.body.appendChild(e)
// }

// EXERCICE 6

// while(1) {
//     let avg = 0
//     let n = parseInt(prompt("Entrez le nombre de nombre que vous voulez rentrez: "))
//
//     for(let i = 0; i < n; i++) {
//         let nb = parseFloat(prompt("Entrez un nombre: "))
//         avg += nb
//     }
//
//     alert("Moyenne: " + avg / n)
// }

// EXERCICE 7

// let str = prompt("Entrez une phrase: ")
// let voyelle = ['a', 'e', 'i', 'o', 'u', 'y']
// let dictionary = {'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0, 'y': 0}
// let nbVoyelle = 0
//
// for(let i in str) {
//     if(voyelle.includes(str[i])) {
//         nbVoyelle++
//     }
//     if (str[i] in dictionary) {
//         dictionary[str[i]]++
//     }
// }
//
// // Affiche nombre de voyelle total
// let nbVoyelleH1 = document.createElement("h1")
// nbVoyelleH1.innerHTML = `
//     Il y a <span style="color: darksalmon">${nbVoyelle}</span> voyelle(s) dans la phrase: <br>
//     <span style="color: mistyrose">${str}</span>
// `
// document.body.appendChild(nbVoyelleH1)
//
// // Affiche nombre de voyelle par voyelle
// for(let i in voyelle) {
//     let e = document.createElement("h1")
//     e.innerHTML = voyelle[i] + ": " + dictionary[voyelle[i]]
//     document.body.appendChild(e)
// }

// EXERCICE 8

// let nbVal = parseInt(prompt("Entrez le nombre de valeur que vous voulez rentrez: "))
// let nbPair = 0
// let tab = []
//
// for(let i = 0; i < nbVal; i++) {
//     let val = parseInt(prompt("Entrez un nombre: "))
//     tab.push(val)
// }
//
// for(let i = 0; i < tab.length; i++) {
//     if(tab[i] % 2 === 0) {
//         nbPair++
//     }
// }
//
// let e = document.createElement("h1")
// e.innerHTML = "Nombre de nombre pair: " + nbPair
// document.body.appendChild(e)

// EXERCICE 9

// function fact(n) {
//     if(n < 2) {
//         return n;
//     } else {
//         return n * fact(n - 1)
//     }
// }
//
// let nb = prompt("Entrez le nombre dont vous voulez la factorielle")
//
// let e = document.createElement("h1")
// e.innerHTML = `
//     Factorielle de ${nb} = ${fact(nb)}
// `
// document.body.appendChild(e)

// EXERCICE 10

// let age = prompt("Entrez votre âge: ")
//
// if(age <=1 || age > 120) {
//     alert("L'âge que vous avez rentrez n'est pas correct.")
// }else if(age <= 17) {
//     alert("Vous êtes encore trop jeune")
// } else if(age <= 49) {
//     alert("Vous êtes majeur et en activité")
// } else if(age <= 59) {
//     alert("Vous êtes encore en activité et non pas retraité")
// } else if(age <= 120) {
//     alert("Vous êtes retraité, profitez de votre temps libre!")
// }

// EXERCICE 11

function numberRegex() {
    let regex =/^[0-9]+$/;
    let e = document.activeElement;
    if(!regex.test(e.value) && e.value !== "") {
        //alert("La valeur que vous avez rentrez n'est pas correct.");
        e.value = "";
    }
}


const table = document.querySelector("table");

table.addEventListener("input", function (event) {
    const tr = event.target.parentElement.parentElement;
    event.target.parentElement.parentElement.lastElementChild.innerHTML = lineSum(tr);
    const columnResult = columnSum(tr, event);
    const lastTr = table.lastElementChild.lastElementChild;
    lastTr.children[columnResult.column].innerHTML = columnResult.sum;
});

function lineSum(tr) {
    let sum = 0;

    let inputs = tr.querySelectorAll("input");
    for(let i of inputs) {
        if (i.value === "") {
            sum += 0;
        } else {
            sum += parseInt(i.value);
        }
    }
    return sum.toString();
}

function columnSum(tr, event) {
    const tds = tr.children;
    let columnIndex = -1;

    for (let i = 0; i < tds.length-1; i++) {
        if (tds[i] === event.target.parentElement) {
            columnIndex = i;
        }
    }

    let sum = 0;

    let trs = table.querySelectorAll("tr");

    for (let i = 0; i < trs.length-1; i++) {
        let inputs = trs[i].querySelectorAll("input");
        if (inputs[columnIndex].value === "") {
            sum += 0;
        } else {
            sum += parseInt(inputs[columnIndex].value);
        }
    }

    console.log(columnIndex, sum)
    return {column:columnIndex, sum: sum.toString()};
}

// lineSum()