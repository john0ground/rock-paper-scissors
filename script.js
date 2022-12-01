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
    else if (
        playerSelection === "rick" && (computerSelection === "rock" || "paper" || "scissors")
    ) {return "rick"}
    else {return "computer";}
}

const result = document.querySelector('.result');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

const playerDisplay = document.querySelector(".player-display");
const computerDisplay = document.querySelector(".computer-display");

const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");

let userPoints = 0;
let computerPoints = 0;

const btn = document.querySelectorAll('button');
btn.forEach(button => button.addEventListener('click', playRound));

function playRound(e) {

    const computer = getComputerChoice();
    const player = e.target.className;

    playerIcon.classList.add('player-animation');
    computerIcon.classList.add('computer-animation');

    playerIcon.textContent = "✊";
    computerIcon.textContent = "✊";

    setTimeout(function () {
        const check = winner(player, computer);

        function shadowHighlight(win, lost) {
             win.classList.add('win-highlight');
             lost.classList.add('lost-highlight');
        }

        function removeHighlight(player, computer) {
            player.classList.remove('win-highlight', 'lost-highlight');
            computer.classList.remove('win-highlight', 'lost-highlight');
        }

        if (check === "player") {
            result.textContent = `You Win! ${player} beats ${computer}`;

            userPoints++;
            playerScore.textContent = userPoints;
            playerScore.classList.add('pl-grow');
            setTimeout(function(){
                playerScore.classList.remove('pl-grow');
            }, 500);

            removeHighlight(playerDisplay, computerDisplay);
            shadowHighlight(playerDisplay, computerDisplay);

            if(userPoints === 5) {
            gameOver();
            }
        }
        else if (check === "computer") {
            result.textContent = `You Lose! ${computer} beats ${player}`;

            computerPoints++;
            computerScore.textContent = computerPoints;
            computerScore.classList.add('comp-grow');
            setTimeout(function(){
                computerScore.classList.remove('comp-grow');
            }, 500);

            removeHighlight(playerDisplay, computerDisplay);
            shadowHighlight(computerDisplay, playerDisplay);

            if(computerPoints === 5) {
                gameOver();
            }   
        }
        else if (check === "rick") {
            removeHighlight(playerDisplay, computerDisplay);
            rickRoll();
            rickDance();
        }
        else{result.textContent = 'Draw!';
          removeHighlight(playerDisplay, computerDisplay);
        }

        function displayIconPlayer() {
            if (player === "rock") {return "✊"}
            else if (player === "paper") {return "🖐"}
            else if (player === "scissors") {return "✌"}
            else if (player === "rick") {return '🖕'}
        }

        function displayIconComputer() {
            if (computer === "rock") {return "✊"}
            else if (computer === "paper") {return "🖐"}
            else if (computer === "scissors") {return "✌"}
        }

        document.getElementById("player-icon").textContent = displayIconPlayer();
        document.getElementById("computer-icon").textContent = displayIconComputer();

        playerIcon.classList.remove('player-animation');
        computerIcon.classList.remove('computer-animation');

    }, 1000);
}

function gameOver() {
    const gameOverContainer = document.createElement('div');
    gameOverContainer.classList.add('final-result');
    const para = document.createElement('p');
    
    gameOverContainer.appendChild(para);

    const lostContent = document.createTextNode('You lost, better luck next time!');
    const wonContent = document.createTextNode('You won!');

    if(userPoints > computerPoints) {
        para.append(wonContent)
    } else {para.append(lostContent)}

    const winnerOutput = document.querySelector('.winner-output');
    winnerOutput.appendChild(gameOverContainer);

    playAgain.classList.add('play-again');
    playAgain.textContent = "Play Again";
    winnerOutput.appendChild(playAgain);

    result.remove();

    btn.forEach(button => {button.disabled = true});
}

const playAgain = document.createElement('div');
playAgain.onclick = () => window.location.reload();



function rickRoll() {
    const audio = document.getElementById('never-gonna-give-you-up');
    audio.play();

    const gameOverContainer = document.createElement('div');
    gameOverContainer.classList.add('final-result');
    const para = document.createElement('p');
    
    gameOverContainer.appendChild(para);
    para.textContent = "Game Over, Rick Astley Wins";

    const winnerOutput = document.querySelector('.winner-output');
    winnerOutput.appendChild(gameOverContainer);

    playAgain.classList.add('play-again');
    playAgain.textContent = "Play Again";
    winnerOutput.appendChild(playAgain);

    result.remove();

    btn.forEach(button => {button.disabled = true});
}

function rickDance() {
    const dancingRick = document.createElement('img');
    dancingRick.src = "rick.gif";
    dancingRick.setAttribute('style', 'width: calc(100% - 30%);')

    const replaceIcon = document.getElementById('computer-icon');
    replaceIcon.parentNode.replaceChild(dancingRick, replaceIcon);
}



