let playerScore = 0;
let computerScore = 0;
let round = 0;
let rounds = 12;

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

function incrementAndLog() {
    computerScore++;
    console.log("Computer Wins this round");
    console.log(`Computer Score: ${computerScore}. Player Score: ${playerScore} `)
}

function playRound(getComputerChoice, getHumanChoice) {     
    if (getComputerChoice === "Rock" && getHumanChoice === "Scissors") {
        incrementAndLog();
    } else if (getComputerChoice === "Paper" && getHumanChoice === "Rock") {
        incrementAndLog();
    } else if (getComputerChoice === "Scissors" && getHumanChoice === "Paper") {
        incrementAndLog();
    } else if (getComputerChoice === getHumanChoice) {
        console.log("Draw!");
        console.log(`Computer Score: ${computerScore}. Player Score: ${playerScore} `)
    } else {
        playerScore++;
        console.log("Player Wins this round");
        console.log(`Computer Score: ${computerScore}. Player Score: ${playerScore} `)
    }     
} 

while(round < rounds) {
    playRound(getComputerChoice(), getHumanChoice());
    round++;
}



