const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
];
cardArray.sort(() => 0.5 - Math.random());
console.log(cardArray);
let cardChoosen=[];
let cardChoosenIds=[];
let cardsWon=[];

const gridDisplay=document.querySelector('#grid');
const resultDisplay=document.querySelector('#result');

console.log(gridDisplay);

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
         const card = document.createElement('img');
         card.setAttribute('src','images/blank.png');
         card.setAttribute('data-id',i);
         card.addEventListener('click',flipCard);
         gridDisplay.appendChild(card);

    }
}
createBoard();

function checkMatch(){
     const cards=document.querySelectorAll('img');
     const optionOneId=cardChoosenIds[0];
     const optionTwoId=cardChoosenIds[1];
     if(optionOneId===optionTwoId){
        alert('You have Clicked same image!');
        cards[optionOneId].setAttribute('src','images/blank.png');
        
     }
     if(cardChoosen[0]===cardChoosen[1]){
        cards[optionOneId].setAttribute('src','images/white.png');
        cards[optionTwoId].setAttribute('src','images/white.png');
        cards[optionOneId].removeEventListener('click',flipCard);
        cards[optionTwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardChoosen);
     }
     else{
        cards[optionOneId].setAttribute('src','images/blank.png');
        cards[optionTwoId].setAttribute('src','images/blank.png');
        alert('sorry, try again!');
     }
     cardChoosen=[];
     cardChoosenIds=[];
     resultDisplay.textContent=cardsWon.length;

     if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent='Congratulations you found them all!';
     }
}

function flipCard(){
    let cardId=this.getAttribute('data-id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);
    this.setAttribute('src',cardArray[cardId].img);
    if(cardChoosen.length===2){
        setTimeout(checkMatch,500);
    }
}