
const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * array.length);
    const compChoice = array[compRandom];
    return compChoice; 
}

function playerChoice() {
    let userInput = prompt("Type rock, paper, or, scissors");

    //case insensitive
    const capitalize = userInput.toLowerCase();
    return capitalize.charAt(0).toUpperCase() + capitalize.slice(1); 
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors")

        || (playerSelection === "Paper" && computerSelection === "Rock") 

        || (playerSelection === "Scissors" && computerSelection === "Paper")

    ) { console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return "player";

    } else if (playerSelection === computerSelection) {
        console.log("Draw!");
        return "tie";
    } else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return "computer";
    }

}




//5 round game
const game = () => {
    
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }

}

game();