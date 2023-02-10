//create random number between 1 to 6.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//combine number and text for access the img file
var randomImg1 = "images/dice" + randomNumber1 + ".png";
//use setAttribute for be able to change the src of the im1 id
document.getElementById("im1").setAttribute("src", randomImg1); 

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("im2").setAttribute("src", randomImg2); 
// this if else statement using to fing largest dice
if (randomImg1 > randomImg2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if(randomImg1 < randomImg2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}