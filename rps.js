let humanScore = 0;
let computerScore = 0;
const humanChoice = toLowerCase(getHumanChoice());
const computerChoice = getComputerChoice();

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
        else if (computerChoice >0.33 && computerChoice <0.67) {
            computerScore ++;
            return;
        }
        else if (computerChoice >0.66) {
            humanScore ++;
            return;
        }
    }
    if (humanChoice = "paper" && computerChoice < 0.34) {
        humanScore ++;
        return; 
    }
    else if (humanChoice = "rock" && (computerChoice >0.33 && computerChoice <0.67)) {
        computerScore ++;
        return;
    }
    else if (humanChoice = "rock" && computerChoice >0.66) {
        humanScore +=1;
        return;
    }
}