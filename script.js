let playerScore = 0;
let computerScore = 0;
let roll = 0;
const button = document.getElementById("diceRoll")
const score = document.getElementById("score")
const action = document.getElementById("action")


const randomNum =  () => {
    let min = Math.ceil(1);
    let max = Math.floor(7);
    roll = Math.floor(Math.random() * (max - min) + min);
    return roll;
}

const playerTurn = (playerScore, action, score) => {
    let num = randomNum();
    console.log(num)
    if (num == 1){
        playerScore = 0;
        score.textContent = `${playerScore}`;
        action.textContent = "Back to 0";
    } else if (num == 2){
        playerScore = playerScore + 2;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 3){
        playerScore = playerScore + 3;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 4){
        playerScore = playerScore + 4;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 5){
        playerScore = playerScore + 5;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else {
        playerScore = playerScore + 6;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    }
    return (playerScore)
}


button.addEventListener("click", () => {
    // playerTurn(playerScore, action, score)

    // Player turn
    let num = randomNum();
    console.log(num)
    if (num == 1){
        playerScore = 0;
        score.textContent = `${playerScore}`;
        action.textContent = "Back to 0";
    } else if (num == 2){
        playerScore = playerScore + 2;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 3){
        playerScore = playerScore + 3;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 4){
        playerScore = playerScore + 4;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else if (num == 5){
        playerScore = playerScore + 5;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    } else {
        playerScore = playerScore + 6;
        score.textContent = `${playerScore}`;
        action.textContent = "Roll!";
    }
    console.log(playerScore)


    // Computer Turn

    
})