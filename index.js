let choices = document.querySelectorAll("button");

let divTextContent = document.querySelector(".output > .text-content");
let divPlayerScore = document.querySelector(".output > .player-score");
let divComputerScore = document.querySelector(".output > .computer-score");
let divWinner = document.querySelector(".output > .winner");

let playerScore = 0;
let computerScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", playRound);
});

divPlayerScore.textContent = `Player score: ${playerScore}`;
divComputerScore.textContent = `Computer score: ${computerScore}`;

function playRound(event) {
    let playerSelection = event.target.className;
    let computerSelection = getComputerChoice();
    
    if (playerSelection === computerSelection) {
        divTextContent.textContent = "It's a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        divPlayerScore.textContent = `Player score: ${playerScore}`;

        divTextContent.textContent = `You Scored! ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)} \
        beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)}`;
    } else {
        computerScore++;
        divComputerScore.textContent = `Computer score: ${computerScore}`;

        divTextContent.textContent = `Computer Scored! ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)} \
        beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)}`;
    }

    if (playerScore === 5 || computerScore === 5) {
        declareWinner(playerScore, computerScore);
    }
}

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function declareWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        divWinner.textContent = "You won";
        choices.forEach((choice) => {
            choice.removeEventListener("click", playRound);
        });
    } else {
        divWinner.textContent = "You loose!";
        choices.forEach((choice) => {
            choice.removeEventListener("click", playRound);
        });
    }
}