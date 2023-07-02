function getComputerChoice() {
    var result = "";
    var randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 1) {
        result = "Rock";
    }
    else if (randomChoice === 2) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }

    return result;
}

function playRound(playerSelection, computerSelection) {
    var result = "";
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        result = "You win! Rock beats Scissors!";
    }
    else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        result = "You win! Paper beats Rock!";
    }
    else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        result = "You win! Scissors beats Paper!";
    }
    else if (playerSelection.toLowerCase() != computerSelection.toLowerCase()) {
        result = "You lose! " + capitalize(computerSelection) + " beats " + capitalize(playerSelection);
    }
    else {
        result = "Try again, same value."
    }

    return result;
}

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function game() {
    var score = 0;
    for (let index = 0; index < 5; index++) {
        var playerSelection = prompt("Rock, Paper or Scissors?");
        console.log(playRound(playerSelection, getComputerChoice()));
    }

}

game();

