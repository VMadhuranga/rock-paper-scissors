function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt("Please select your choice from: Rock, Paper, Scissors ").toLocaleLowerCase();
    return choice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log("It's a tie");
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            playerScore++;
            console.log(`You Scored! ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)}`);
        } else {
            computerScore++;
            console.log(`Computer Scored! ${computerSelection[0].toUpperCase() + computerSelection.slice(1,)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1,)}`);
        }
    }
        
    for (let i = 1; i <= 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        return "You Won! You beats Computer";
    } else {
        return "You Lose! Computer beats you";
    }
}

console.log(game());