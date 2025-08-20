let humanScore = 0;
let computerScore = 0;
let humanChoice = toLowerCase(getHumanChoice());
let computerChoice = getComputerChoice();

function getComputerChoice() {
    return Math.random();
}

function getHumanChoice() {
   return String(window.prompt("Rock, Paper, Scissors?", ""));
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice = "rock") {
        if (computerChoice < 0.34) {
            return;
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            computerScore ++;
            return;
        }
        else if (computerChoice >= 0.67) {
            humanScore ++;
            return;
        }
    }
    else if (humanChoice = "paper") {
        if (computerChoice < 0.34) {
            humanScore ++;
            return;        
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            return;
        }
        else if (computerChoice >= 0.67) {
            computerScore ++;
            return;
        }
    }
    else if (humanChoice = "scissors") {
        if (computerChoice < 0.34) {
            computerScore ++;
            return;        
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            humanScore ++;
            return;
        }
        else if (computerChoice >= 0.67) {
            return;
        }
    }
}

function playGame() {
    let i = 0;
    while (i < 5) {
        playRound(humanChoice, computerChoice)
        i ++;
    }
    return humanScore, computerScore;
}