var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var cap = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var pic = cap[randomNumber1];
var randomImage = "images/" + pic;

document.querySelectorAll("img")[0].setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var cap = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var pic = cap[randomNumber2];
var randomImage2 = "images/" + pic;
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "player1 Wins";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player2 Wins";
}else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw"
}
