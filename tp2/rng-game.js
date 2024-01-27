let randomNumber = Math.floor(Math.random() * 5000) + 1
let guess = document.getElementById('number')
let test = document.getElementById('test')
let tooLow = document.getElementById('too-low')
let tooHigh = document.getElementById('too-high')
let tries = 0

test.addEventListener('click', () => {
    tries++
    if(guess.value < randomNumber) {
        tooLow.style.visibility = 'visible'
        tooHigh.style.visibility = 'hidden'
    } else if(guess.value > randomNumber) {
        tooHigh.style.visibility = 'visible'
        tooLow.style.visibility = 'hidden'
    } else {
        alert('You won in ' + tries + ' tries!')
    }
})