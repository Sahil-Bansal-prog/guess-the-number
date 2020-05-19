//create secretNumber 
var num = 6;

//ask user for guess
var guess = prompt("Guess the number!!");


//check guess
if (Number(guess) === num){
    alert("YOU GOT IT RIGHT")
}
else {
    alert("WRONG GUESS")
}