function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = prompt("Please select your choice from: Rock, Paper, Scissors ").toLocaleLowerCase();
    return choice;
}
