let celciusInput = document.getElementById('celcius');
let fahrenheitInput = document.getElementById('fahrenheit');

function calcFahrenheit() {
    fahrenheitInput.value = (celciusInput.value * 1.8 + 32).toFixed(2);
}

function calcCelcius() {
    celciusInput.value = ((fahrenheitInput.value - 32) / 1.8).toFixed(2);
}

// Version auto calc when change input
if(celciusInput !== null) {
    celciusInput.addEventListener('input', calcFahrenheit);
}
if(fahrenheitInput !== null) {
    fahrenheitInput.addEventListener('input', calcCelcius);

}
// Version with buttons
// let buttonCelcius = document.getElementById('celcius-convert');
// let buttonFahrenheit = document.getElementById('fahrenheit-convert');
//
// buttonCelcius.addEventListener('click', calcFahrenheit);
// buttonFahrenheit.addEventListener('click', calcCelcius);