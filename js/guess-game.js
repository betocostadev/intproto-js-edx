/* Guessing Game */
// program data:
const startBtn = document.getElementById('start-game');
const result = document.getElementById('result');

startBtn.addEventListener('click', function () {
    const number = Math.floor(Math.random() * 100) + 1;
    let guess;
    let limit = 5;
    let won =  false;
    let guesses = [];


    for (i = 1; i <= limit; i++){
        // prompt user for their guess
        do {
            guess = parseInt(prompt("Guess a number between 1 and 100: "));
        } while (isNaN(guess) || (guess > 100) || (guess <= 0));

        // if correct: let the user know they won
        if(guess == number){
            result.innerHTML = ("Correct! You won.");
            won = true;
            break;
        } else if (isPreviousGuess() == true) {
            alert(`Number already guessed. You have guessed the numbers ${guesses}, and you still have ${limit - i} remaining guesses.`);
        } else if (guess > number) {
            guesses[i] = guess;
            alert(`Incorret number!
            You have guessed: ${guesses}.
            The number is lower!
            Tries remaining: ${limit - i}`);
        } else if (guess < number) {
            guesses[i] = guess;
            alert(`Incorret number!
            You have guessed: ${guesses}.
            The number is higher!
            Tries remaining: ${limit - i}`);
        } else {
            // if incorrect: let the user know how many tries they have remaining
            guesses[i] = guess;
            alert("Incorrect number. \nYou have guessed: " + guesses.toString() + "\nTries remaining: " + (limit - i));
        }
    }

    // if the user ran out of tries, let them know the game is over
    if(!won){
        result.innerHTML = ("The number was " + number + ". Sorry, you ran out of tries.<br>" + "Your guesses were " + guesses + "<br> Game over.");
        // document.write("The number was " + number + ". Sorry, you ran out of tries.<br>" + "Your guesses were " + guesses + "<br> Game over.");
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

});