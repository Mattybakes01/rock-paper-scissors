let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    return returnRockPaperScissors(randomNumber);
}

function getHumanChoice() {
    let userChoice = parseInt(prompt("Enter 1 for rock, 2 for paper or 3 for scissors"));
    return returnRockPaperScissors(userChoice);
}

function returnRockPaperScissors(num) {
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


