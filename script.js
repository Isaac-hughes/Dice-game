let playerScore = 0;
let computerScore = 0;
let roll = 0;
const button = document.getElementById("diceRoll")
const playerScoreID = document.getElementById("playerScore")
const computerScoreID = document.getElementById("computerScore")
const action = document.getElementById("action")
const playerDice = document.getElementById("playerDice")
const computerDice = document.getElementById("computerDice")


const randomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(7);
    roll = Math.floor(Math.random() * (max - min) + min);
    return roll;
}


const playerTurn = () => {
    let num = randomNum();
    if (num == 1){
        playerScore = 0;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Back to 0";
        playerDice.src = "img/dice1.png"
    } else if (num == 2){
        playerScore = playerScore + 2;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
        playerDice.src = "img/dice2.png"
    } else if (num == 3){
        playerScore = playerScore + 3;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
        playerDice.src = "img/dice3.png"
    } else if (num == 4){
        playerScore = playerScore + 4;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
        playerDice.src = "img/dice4.png"
    } else if (num == 5){
        playerScore = playerScore + 5;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
        playerDice.src = "img/dice5.png"
    } else {
        playerScore = playerScore + 6;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
        playerDice.src = "img/dice6.png"
    }
}

const computerTurn = () => {
    let num = randomNum();
    if (num == 1){
        computerScore = 0;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice1.png"
    } else if (num == 2){
        computerScore = computerScore + 2;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice2.png"
    } else if (num == 3){
        computerScore = computerScore + 3;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice3.png"
    } else if (num == 4){
        computerScore = computerScore + 4;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice4.png"
    } else if (num == 5){
        computerScore = computerScore + 5;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice5.png"
    } else {
        computerScore = computerScore + 6;
        computerScoreID.textContent = `${computerScore}`;
        computerDice.src = "img/dice6.png"

    }
}

button.addEventListener("click", () => {
    if (playerScore >= 30){
        playerScore = 0;
        computerScore = 0;
        action.textContent = "You Win! Play Again!"
    }else if (computerScore >= 30){
        playerScore = 0;
        computerScore = 0;
        action.textContent = "You lose! Play Again!"
    } else {
        playerTurn()
        computerTurn()
    }
})