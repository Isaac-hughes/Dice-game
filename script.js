let playerScore = 0;
let computerScore = 0;
let roll = 0;
const button = document.getElementById("diceRoll")
const playerScoreID = document.getElementById("playerScore")
const computerScoreID = document.getElementById("computerScore")
const action = document.getElementById("action")


const randomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(7);
    roll = Math.floor(Math.random() * (max - min) + min);
    return roll;
}


const playerTurn = () => {
    let num = randomNum();
    console.log('Ranom number', num)
    if (num == 1){
        playerScore = 0;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Back to 0";
    } else if (num == 2){
        playerScore = playerScore + 2;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 3){
        playerScore = playerScore + 3;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 4){
        playerScore = playerScore + 4;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 5){
        playerScore = playerScore + 5;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else {
        playerScore = playerScore + 6;
        playerScoreID.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    }
    console.log('new Player score', playerScore)
}

const computerTurn = () => {
    let num = randomNum();
    console.log('Ranom number', num)
    if (num == 1){
        computerScore = 0;
        computerScoreID.textContent = `${computerScore}`;
    } else if (num == 2){
        computerScore = computerScore + 2;
        computerScoreID.textContent = `${computerScore}`;
    } else if (num == 3){
        computerScore = computerScore + 3;
        computerScoreID.textContent = `${computerScore}`;
    } else if (num == 4){
        computerScore = computerScore + 4;
        computerScoreID.textContent = `${computerScore}`;
    } else if (num == 5){
        computerScore = computerScore + 5;
        computerScoreID.textContent = `${computerScore}`;
    } else {
        computerScore = computerScore + 6;
        computerScoreID.textContent = `${computerScore}`;

    }
    console.log('new computer score', computerScore)
}

button.addEventListener("click", () => {
    playerTurn()
    console.log('new Player score', playerScore)
    computerTurn()
    console.log('new Player score', computerScore)
})