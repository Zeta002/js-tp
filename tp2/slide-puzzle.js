let game = document.getElementById('game')
let tiles = game.children

let moveCounterElement = document.getElementById('move-counter')

let moveCounter = 0

for(let i of tiles) {
    i.addEventListener('click', (e) => {
        game.appendChild(e.target)
        moveCounterElement.innerHTML++
    })
}