const gameTemplate = document.querySelector("[data-game-template]")


fetch("games.json")
 .then(res => res.json())
 .then(data => {
    data.forEach(game => {
    const game = gameTemplate.content.cloneNode(true).children[0]
    const rndrec = rndrec.querySelector("[data-rndrecdata]")

    rndrecdata.textContent = game.name
    rndrecdata.textContent = game.directory
    append(game)

    console.log(game)
    })
 })