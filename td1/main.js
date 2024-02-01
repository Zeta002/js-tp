// 1
function genTabRNG(min, max, n) {
    let array = [];
    for (let i = 0; i < n; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}
let tabRNG = genTabRNG(-10, 40, 10);
// console.log(genTabRNG(-10, 40, 10));

// 2
// In HTML

// 4
// In HTML

// 3 - 5
let dataElement = document.getElementById("data");

async function displayRNGTab() {
    let messageElement = document.getElementById("message");
    for(let i = 0; i < tabRNG.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dataElement.innerHTML = tabRNG[i];
        let data = parseInt(dataElement.innerText);
        console.log(data);

        dataElement.classList.remove("border-blue", "border-green", "border-orange", "border-red");

        if (data <= 0) {
            messageElement.innerHTML = "\"Brrrrrrr, un peu froid ce matin, mets ta cagoule !\""
            dataElement.classList.add("border-blue")
        } else if (data <= 20) {
            messageElement.innerHTML = ""
            dataElement.classList.add("border-green")
        } else if (data <= 30) {
            messageElement.innerHTML = ""
            dataElement.classList.add("border-orange")
        } else {
            messageElement.innerHTML = "\"Caliente ! Vamos a la playa, ho hoho hoho !!\""
            dataElement.classList.add("border-red")
        }
    }
}

displayRNGTab().then(r => console.log("Done"));

// 7
// TODO