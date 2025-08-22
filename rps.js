let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let message = "";

function getComputerChoice() {
    return Math.random();
}

function getHumanChoice() {
   return String(window.prompt("Rock, Paper, Scissors?", ""));
}

let buttons = document.getElementById('controlButtons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            humanChoice = target.id.toLowerCase();
            playGame();
            break;
        case 'Paper':
            humanChoice = target.id.toLowerCase();
            playGame();
            break;
        case "Scissors":
            humanChoice = target.id.toLowerCase();
            playGame();
            break;
    }
});
function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    if (humanChoice = "rock") {
        if (computerChoice < 0.34) {
            message = "tie!"
            return;
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            message = "you lose! paper beats rock"
            computerScore ++;
            return;
        }
        else if (computerChoice >= 0.67) {
            message = "you win! rock beats scissors"
            humanScore ++;
            return;
        }
    }
    else if (humanChoice = "paper") {
        if (computerChoice < 0.34) {
            message = "you win! paper beats rock"
            humanScore ++;
            return;        
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            message = "tie!"
            return;
        }
        else if (computerChoice >= 0.67) {
            message = "you lose! scissors beats paper"
            computerScore ++;
            return;
        }
    }
    else if (humanChoice = "scissors") {
        if (computerChoice < 0.34) {
            message = "you lose! rock beats scissors"
            computerScore ++;
            return;        
        }
        else if (computerChoice > 0.33 && computerChoice < 0.66) {
            message = "you win! scissors beats paper"
            humanScore ++;
            return;
        }
        else if (computerChoice >= 0.67) {
            message = "tie!"
            return;
        }
    }
};


function displayScore (humanScore, computerScore, message) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let results = document.getElementById('results');

    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    results.innerText = `${message}`;
}

function displayWinner (winner) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let results = document.getElementById('results');

    hScoreDisplay.innerText = "";
    cScoreDisplay.innerText = "";
    results.innerText = `${winner}`;
}
function playGame() {
    let i = 0;
    while (i < 5) {
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice)
            displayScore(humanScore, computerScore, message)
            i++
            return;
        }
        let winner = ""
    if (humanScore > computerScore) {
        winner = "you win!"
    }
    else {
        winner = "you lose!"
    }
    displayWinner(winner);
    return;
}
playGame()
