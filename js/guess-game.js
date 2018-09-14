/* Guessing Game */
// program data:
const number = 4;
let guess;
let limit = 3;
let won =  false;

for (i = 1; i <= limit; i++){
    // prompt user for their guess
    guess = prompt("Guess a number");

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    }
    // if incorrect: let the user know how many tries they have remaining
    else{
        alert("incorrect. \nTries remaining: " + (limit - i));
    }
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. Game over.");
}