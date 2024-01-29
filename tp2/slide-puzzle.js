const game = document.getElementById('game')
const tiles = game.children
const moveCounterElement = document.getElementById('move-counter')
const resetButton = document.getElementById('reset-button')

function winCondition() {
    for(let i = 0; i < tiles.length; i++) {
        if(tiles[i].classList.contains('empty')) continue
        let nb = parseInt(tiles[i].innerHTML)
        if(nb !== i + 1) {
            return false
        }
    }
    return true
}

function checkMovable(e) {
    const nbColumns = getComputedStyle(game).gridTemplateColumns.split(' ').length
    const emptyTile = document.querySelector('.empty')
    const checkTile = index => tiles[index] === emptyTile
    const index = Array.from(tiles).indexOf(e)
    const indicesToCheck = [
        index % nbColumns !== 0 ? index - 1 : null,
        index % nbColumns !== nbColumns - 1 ? index + 1 : null,
        index >= nbColumns ? index - nbColumns : null,
        index < nbColumns * (nbColumns - 1) ? index + nbColumns : null
    ].filter(index => index !== null)
    return indicesToCheck.some(checkTile)
}

function randomizeTiles() {
    const numbers = Array.from({length: 15}, (_, i) => i + 1)
    numbers.sort(() => Math.random() - 0.5)
    let tileIndex = 0
    for(let i of tiles) {
        if(i.classList.contains('empty')) continue
        i.id = numbers[tileIndex].toString()
        i.innerHTML = numbers[tileIndex].toString()
        tileIndex++
    }
}

for(let i of tiles) {
    i.addEventListener('click', () => {
        const emptyTile = document.querySelector('.empty')
        if(!checkMovable(i)) return
        emptyTile.innerHTML = i.innerHTML
        i.innerHTML = ""
        if(i.classList.contains('empty')) return
        i.classList.add('empty')
        emptyTile.classList.remove('empty')
        moveCounterElement.innerHTML++
        if(winCondition()) alert(`You win in ${moveCounterElement.innerHTML} moves! Congratulations!`)
    })
}

resetButton.addEventListener('click', () => {
    randomizeTiles()
    moveCounterElement.innerHTML = "0"
})

randomizeTiles() // If you want to cheat to finish the game, comment this line and move 2 times the last tile