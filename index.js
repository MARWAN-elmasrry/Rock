var hands=["rock","paper","scissor"]

function getHand(){
    let randomIndex=Math.floor(Math.random()*3)
    return hands[randomIndex]
}
function play(){
    getHand()
    let h1El=document.getElementById("h1-el")
    h1El.textContent=getHand()
}