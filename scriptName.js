
const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * Array.length);
    const compChoice = array[compRandom];
    return compChoice; 
}

function playRound(playerSelection, computerSelection) {
    let message;
    if(
        (playerSelection === "Rock" && computerSelection === "Scissors")

        || (playerSelection === "Paper" && computerSelection === "Rock") 

        || (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
   
    }
    return message;
}

const computerSelection = "Rock";
const playerSelection = "Paper";

console.log(playRound(playerSelection, computerSelection));