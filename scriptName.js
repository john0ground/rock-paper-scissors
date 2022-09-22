
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

function winner(playerSelection, computerSelection) {
    if (
        (playerSelection === "Rock" && computerSelection === "Scissors")

        || (playerSelection === "Paper" && computerSelection === "Rock") 

        || (playerSelection === "Scissors" && computerSelection === "Paper")

    ) {return "player";}     
    else if (playerSelection === computerSelection) {return "tie";} 
    else {return "computer";}

}

function playRound(playerSelection, computerSelection) {
    const check = winner(playerSelection, computerSelection);
    if (check === "player") {return `You Win! ${playerSelection} beats ${computerSelection}`;}
    else if (check === "computer") {return `You Lose! ${computerSelection} beats ${playerSelection}`;}
    else {return "Draw!"}
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