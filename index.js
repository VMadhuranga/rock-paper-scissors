function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt("Please select your choice from: Rock, Paper, Scissors ").toLocaleLowerCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));