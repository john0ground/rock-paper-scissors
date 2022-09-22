
const array = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * array.length);
    const compChoice = array[compRandom];
    return compChoice; 
}

function playerChoice() {
    let userInput = prompt("Input rock, paper, scissors");
    while (userInput == null) {
        userInput = prompt("Choice empty, type rock, paper, or scissors");
    }
   
    //case insensitive
    const lowerCase = userInput.toLowerCase();
    const capitalize = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1); 
    const choice = capitalize;
    return choice;

    
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

  let playerScore = 0;
  let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));

        if (winner(playerSelection, computerSelection) === "player") {playerScore++}
        else if (winner(playerSelection, computerSelection) === "computer") {computerScore++}
    }
    
    console.log("--------------");
    console.log(`Game Over, Player score ${playerScore} | Computer score ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Player Wins!");
    } else if (playerScore < computerScore) {
        console.log("Computer Wins");
    } else { console.log("It's a tie!"); }
}

game();