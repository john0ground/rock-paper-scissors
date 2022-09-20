
const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * array.length);
    const compChoice = array[compRandom];
    return compChoice; 
}

function playRound(playerSelection, computerSelection) {
    let message;
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors")

        || (playerSelection === "Paper" && computerSelection === "Rock") 

        || (playerSelection === "Scissors" && computerSelection === "Paper")

    ) { message = `You Win! ${playerSelection} beats ${computerSelection}`;

    } else if (playerSelection === computerSelection) {
        message = "Draw!";
    } else {
        message = `You Lose! ${computerSelection} beats ${playerSelection}`};

    return message;
}

const computerSelection = getComputerChoice();
const playerSelection = "Rock";

console.log(playRound(playerSelection, computerSelection));