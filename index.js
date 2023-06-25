function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt("Please select your choice from: Rock, Paper, Scissors ").toLocaleLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)}`;
    } else {
        return `You Lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)}`;
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));