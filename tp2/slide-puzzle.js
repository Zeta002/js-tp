let game = document.getElementById('game')
let tiles = game.children
let lastTile = document.getElementById('16')

let moveCounterElement = document.getElementById('move-counter')

for(let i of tiles) {
    i.addEventListener('click', (e) => {
        let targetHTML = e.target.innerHTML
        let targetId = e.target.id
        let lastTileId = lastTile.id // Sauvegarder l'identifiant de lastTile avant de le changer

        e.target.innerHTML = lastTile.innerHTML
        lastTile.id = "temporary"
        e.target.id = lastTileId // Utiliser l'identifiant sauvegardé de lastTile
        lastTile.id = targetId
        lastTile.innerHTML = targetHTML
        moveCounterElement.innerHTML++
    })
}