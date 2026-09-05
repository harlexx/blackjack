let randomCard = ()=>{
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if(randomNumber ===1){
        return 11;
    }else if(randomNumber > 10){
        return 10;
    }else{
         return randomNumber;
    }
}
let hasBlackJack = false;
let isAlive = false;
let sumCards = 0;
let message = document.getElementById("message");
let startBtn = document.getElementById("startBtn");
let sum = document.getElementById("sum");
let cards = document.getElementById("cards");
let newCard = document.getElementById("newBtn");
let cardArray = [];

let player ={
    name : "Alex",
    chips : 145
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let renderGame = ()=>{ 
    cards.textContent = "Cards: ";
    for(let i = 0; i < cardArray.length; i++){
        cards.textContent  += cardArray[i] + " ";
    }
    sum.textContent = "Sum: " + sumCards;
    isAlive = true;
    if(sumCards < 21){
    message.textContent = "Do you want to draw a new card?";
}
else if(sumCards === 21){
    message.textContent = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
}
else{
    message.textContent = "You're out of the game!";
    isAlive = false;
} 
}
startBtn.addEventListener("click", ()=>{ 
     let firstCard = randomCard();
     let secondCard = randomCard();
     sumCards = firstCard + secondCard;
     cardArray = [firstCard, secondCard];
    renderGame();
})
newCard.addEventListener("click", ()=>{
    if(isAlive === true && hasBlackJack === false){
    let thirdCard = randomCard();
    cardArray.push(thirdCard);
    sumCards += thirdCard;
    renderGame();
}
})
    