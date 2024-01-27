let nbList = document.querySelectorAll('.nbs') // List of all inputs .nbs
let nb1 = nbList[0] // Input nb1
let nb2 = nbList[1] // Input nb2

let result = document.getElementById('result') // Span result

let operator = document.getElementById('operator') // Dropdown operator

let execute = document.getElementById('execute') // Button execute

function calc()  {

    // Check if input is empty
    if(nb1.value === "" || nb2.value === "") {
        result.innerHTML = "0"
        return
    }

    // Calc result, it depends on the operator
    let operatorValue = document.getElementById('operator').value
    console.log(operatorValue)
    switch (operatorValue) {
        case "-":
            result.innerHTML = (parseInt(nb1.value) - parseInt(nb2.value)).toString()
            break
        case "+":
            result.innerHTML = (parseInt(nb1.value) + parseInt(nb2.value)).toString()
            break
        case "*":
            result.innerHTML = (parseInt(nb1.value) * parseInt(nb2.value)).toString()
            break
        case "/":
            result.innerHTML = (parseInt(nb1.value) / parseInt(nb2.value)).toString()
            break
        default:
            result.innerHTML = "0"
    }
}
// Version calc when click on button
execute.addEventListener('click', calc)

// Version auto calc when change input or operator
// operator.addEventListener('change', () => {
//     calc()
// })
//
// for(let i of nbList) {
//     i.addEventListener('input', calc)
// }