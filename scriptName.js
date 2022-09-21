
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


//case insensitive for input
function playerChoice() {
    const capitalize = userInput.toLowerCase();
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1); 
}

const userInput = "scISSOrS"; //user choice input

const playerSelection = playerChoice();
const computerSelection = getComputerChoice();
    
console.log(playRound(playerSelection, computerSelection));

// const game = () => {  
//     for (let i = 0; i < 5; i++)
//     (playRound(playerSelection, computerSelection))

// }

// console.log(game());
