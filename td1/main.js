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
    let hist = [];

    let messageElement = document.getElementById("message");
    let abbrCelsius = document.getElementById("abbr-celsius");
    let tempStateElement = document.getElementById("temp-state");
    let tempState = "";
    for(let i = 0; i < tabRNG.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dataElement.style.display = "block";

        dataElement.innerHTML = tabRNG[i] + abbrCelsius.innerHTML;
        let data = parseInt(dataElement.innerText);


        dataElement.classList.remove("border-blue", "border-green", "border-orange", "border-red");
        // dataElement.className = ""; // Je ne peux pas utiliser ça, car ça retire aussi les classes de base de tailwind

        if (data <= 0) {
            // messageElement.innerHTML = "\"Brrrrrrr, un peu froid ce matin, mets ta cagoule !\""
            dataElement.classList.add("border-blue")
            tempState = "très froid: ";
        } else if (data <= 20) {
            messageElement.innerHTML = ""
            dataElement.classList.add("border-green")
            tempState = "froid: ";
        } else if (data <= 30) {
            messageElement.innerHTML = ""
            dataElement.classList.add("border-orange")
            tempState = "chaud: ";
        } else {
            // messageElement.innerHTML = "\"Caliente ! Vamos a la playa, ho hoho hoho !!\""
            dataElement.classList.add("border-red")
            tempState = "très chaud: ";
        }

        tempStateElement.innerText = "Il fait " + tempState;

        hist.push(data);

        displayHistory(hist)
    }
}

function displayHistory(hist) {
    let histElement = document.getElementById("hist");
    histElement.style.display = "block";
    histElement.innerHTML = "";
    let date = new Date();
    for(let i of hist) {
        histElement.innerHTML += `Il a fait ${i}°C le ${date.toLocaleDateString()} à ${date.toLocaleTimeString()}<br>`;
    }
}

await displayRNGTab();

// 7
