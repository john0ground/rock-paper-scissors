
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

function caseInsensitive(userChoice) {
    const capitalize = userChoice.toLowerCase();
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1); 
}

const userChoice = "pAPEr"; //user choice input

const playerSelection = caseInsensitive(userChoice);
const computerSelection = getComputerChoice();
    
console.log(playRound(playerSelection, computerSelection));