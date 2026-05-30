//Dice Roll Program

function rollDice() {

    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for (let i = 0; i < numOfDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        values.push(roll);
        images.push(`<img src="../assets/diceRoll_images/${roll}.png" alt="Dice ${roll}">`);
    }

    diceResult.textContent = `You rolled: ${values.join(", ")}`;
    diceImages.innerHTML = images.join("");
}