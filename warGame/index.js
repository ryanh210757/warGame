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