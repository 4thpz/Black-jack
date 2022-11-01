
let sum= 0 
let hasBlackJack= false
let isAlive= true
let message="";
let cards= []

let messageEl= document.getElementById('message-el')
let sumEl= document.querySelector("#sum-el")
let cardEl= document.querySelector('#cards-el');
let player = {
    name: "Placide",
    chips: 145
}
let playerEl= document.querySelector("#player-el")
playerEl.textContent= player.name + " : $" + player.chips
function getRandomCard() {
    let randNumb= Math.floor(Math.random() * 13) +1;
   if(randNumb > 10)
   {
    return 10
   }else if(randNumb === 1)
   {
    return 1
   }else{
    return randNumb
   }
}
function startGame() {
    let firstCard= getRandomCard();
    let secondCard= getRandomCard();
    sum= firstCard + secondCard
    cards= [firstCard, secondCard]
    renderGame()
}
function renderGame() {
 cardEl.textContent=" Cards: " ;

 for(let i=0; i< cards.length; i++)
 {
    cardEl.textContent += cards[i] + " "
 }
    if(sum <= 20) {
        message="Do you want to draw a new card !"
    }else if (sum === 21) {
        message="You've got a blackjack !"
        hasBlackJack= true
    }else {
        message="You're out of the game";
        isAlive= false
    }
    
    
    messageEl.textContent= message;
    sumEl.textContent= "Sum:" + sum
}

function newCard() {
    if(isAlive=== true && hasBlackJack=== false)
{
    let card= getRandomCard();
    sum+=card
    cards.push(card)
    renderGame()
}

}


function check(text){
    let arr= Array.from(text);
    let target=["a","c"];
    let count=0;
    for(let i=0; i<arr.length; i++)
    {
        if(target.includes(arr[i]))
        {
            count+=1;
        }
    }
    console.log(count);
}
check("accountant");