/* Guessing Game */
// program data:
const number = 4;
let guess;
let limit = 3;
let won =  false;
let guesses = [];

for (i = 1; i <= limit; i++){
    // prompt user for their guess
    guess = parseInt(prompt("Guess a number: "));

    // if correct: let the user know they won
    if(guess == number){
        document.write("Correct! You won.");
        won = true;
        break;
    } else if (isPreviousGuess() == true) {
        alert(`Number already guessed. You have guessed ${guesses}, and you still have ${limit - i} remaining guesses.`);
    } else {
        // if incorrect: let the user know how many tries they have remaining
        guesses[i] = guess;
        alert("incorrect. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
    }
}

// if the user ran out of tries, let them know the game is over
if(!won){
    document.write("Sorry, you ran out of tries. Game over.");
}

// Check if the user has already guessed the number:
function isPreviousGuess(){
    for(i = 0; i < guesses.length; i++){
        if(guesses[i] == guess){
            return true;
        }
    }
    return false;
}