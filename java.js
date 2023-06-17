var randomNumber1 =Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src", "dice"+randomNumber1+".png");
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src", "dice"+randomNumber2 + ".png");
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🚩";
}
else if(randomNumber2 >randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 wins! 🚩";
}
else if(randomNumber1 = randomNumber2){
    document.querySelector("h1").innerHTML = "Draw :)";
}