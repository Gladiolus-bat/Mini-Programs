//Number Guessing Game

const guessSubmit = document.getElementById("guessSubmit");
const guessField = document.getElementById("guessInput");
const resultDisplay = document.getElementById("feedback");

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessSubmit.onclick = function() {
    const userGuess = Number(guessField.value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        window.alert(`Please enter a valid number between 1 and 100.`);
        return;
    }
    attempts++;
    if (userGuess === randomNumber) {
        resultDisplay.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        guessSubmit.disabled = true;
    } else if (userGuess < randomNumber) {
        resultDisplay.textContent = "Too low! Try again.";
    } else {
        resultDisplay.textContent = "Too high! Try again.";
    }
    guessField.value = "";
    guessField.focus();
}