const array = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const compRandom = Math.floor(Math.random() * array.length);
    const compChoice = array[compRandom];
    return compChoice; 
}

function winner(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors")

        || (playerSelection === "paper" && computerSelection === "rock") 

        || (playerSelection === "scissors" && computerSelection === "paper")

    ) {return "player";}     
    else if ((playerSelection === computerSelection)) {return "tie";} 
    else {return "computer";}
}

const result = document.querySelector('.result');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const finalResult = document.querySelector('.winner');

let userPoints = 0;
let computerPoints = 0;

function playRound(e) {
    const computer = getComputerChoice();
    const player = e.target.className;
  
    const check = winner(player, computer);

    if (check === "player") {
        result.textContent = `You Win! ${player} beats ${computer}`;
        userPoints++;
        if(userPoints === 5) {
            finalResult.textContent = 'You Won!'
        }
        playerScore.textContent = userPoints;
    }
    else if (check === "computer") {
        result.textContent = `You Lose! ${computer} beats ${player}`;
        computerPoints++;
        if(computerPoints === 5) {
            finalResult.textContent = 'You Lose';
        }
        computerScore.textContent = computerPoints;
    }
    else {result.textContent = 'Draw!';}
}

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('click', playRound));



