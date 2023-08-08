const cards = document.querySelectorAll(".card");
console.log(cards);

//variables

var isflipped = false;
var firstCard;
var secondCard;
var displayscore = document.getElementById("points");
var score= 0;

// var flip = () =>{
//    console.log("card flipped");
// }
var flip = (obj) =>{
    console.log("card flipped");
    console.log(obj);
    obj.classList.add("flip");
    if(!isflipped){
        isflipped = true;
        firstCard = obj;
    }else{
        secondCard = obj;
        console.log(firstCard);
        console.log(secondCard);

        checkIt();
    }
};
cards.forEach((card) =>  card.addEventListener("click",() => {flip(card)}))

function checkIt(){
    // console.log("Checking....");
    if(firstCard.dataset.image == secondCard.dataset.image){
        success();
        showScore();
    }else{
        fail(firstCard,secondCard);
    }
}


function success(){
    console.log("Success");
    firstCard.removeEventListener("click",() => {flip(firstCard)});
    secondCard.removeEventListener("click",() => {flip(secondCard)});
    console.log(points);
    reset();
}
function showScore(){
    score += 1;
    displayscore.innerText = score;
}

function fail(firstCard,secondCard){
    // console.log("Failed");
    setTimeout(() => {
        firstCard.classList.remove("flip")
        secondCard.classList.remove("flip")
        reset()
    },1000);


}

function reset(){
    isflipped = false;
    firstCard = null ;
    secondCard = null;
}


(function shuffle(){
    cards.forEach((card) => {
        var index = Math.floor(Math.random()*16);
        card.style.order = index;
    });
})();