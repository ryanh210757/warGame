let deckID

function handleClick(){
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        deckID = data.deck_id
    })

}

document.getElementById("btn").addEventListener("click", handleClick)



document.getElementById("drawBtn").addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            console.log(data.cards)
            document.getElementById("cards").innerHTML = `
                <img src=${data.cards[0].image} class="card" />
                <img src=${data.cards[1].image} class="card" />
            `
        })
})