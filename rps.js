let humanScore = 0;
let computerScore = 0;
let computerChoice = 0;
let humanChoice = "";
let message = "";
let i = 0;

let buttons = document.getElementById('controlButtons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            if (i < 5) {
                humanChoice = target.id.toLowerCase();
                computerChoice = getComputerChoice();
                console.log(humanChoice, computerChoice, i)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message);
                i++;
                break;
            }
            winnerLogic(humanScore, computerScore);
            displayWinner (winner)
            break;
        case 'Paper':
            if (i < 5) {
                humanChoice = target.id.toLowerCase();
                computerChoice = getComputerChoice();
                console.log(humanChoice, computerChoice)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message);
                i++;
                break;
            }
            winnerLogic(humanScore, computerScore);
            displayWinner (winner)
            break;
        case "Scissors":
            if (i < 5) {
                humanChoice = target.id.toLowerCase();
                computerChoice = getComputerChoice();
                console.log(humanChoice, computerChoice)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message);
                i++;
                break;
            }
            winnerLogic(humanScore, computerScore);
            displayWinner (winner)
            break;
    }
});

function winnerLogic(humanScore, computerScore){
    if (humanScore > computerScore) {
        winner = "you win the game!"
    }
    else {
        winner = "you lose the game!"
    }
};


function gameLogic() {
    let i = 0;
    
    
}
function getComputerChoice() {
    computerChoice = Math.random()
    
    switch(computerChoice) {
        case (computerChoice < 0.34):
            computerChoice = "rock"
            break;
        case (computerChoice > 0.34 && computerChoice < 0.66):
            computerChoice = "paper"
            break;
        case (computerChoice >= 0.66):
            computerChoice = "scissors"
    };
}


function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            message = "tie!";
            return;
        }
        else if (computerChoice === "paper") {
            message = "you lose! paper beats rock";
            computerScore ++;
            return;
        }
        else {
            message = "you win! rock beats scissors";
            humanScore ++;
            return;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            message = "you win! paper beats rock";
            humanScore ++;
            return;        
        }
        else if (computerChoice === "paper") {
            message = "tie!"
            return;
        }
        else {
            message = "you lose! scissors beats paper";
            computerScore ++;
            return;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            message = "you lose! rock beats scissors";
            computerScore ++;
            return;        
        }
        else if (computerChoice === "paper") {
            message = "you win! scissors beats paper";
            humanScore ++;
            return;
        }
        else {
            message = "tie!";
            return;
        }
    }
};


function displayScore (humanScore, computerScore, message, computerChoice) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let cChoiceDisplay = document.getElementById('cSelection');
    let results = document.getElementById('results');

    cChoiceDisplay = `Computer Choice: ${computerChoice}`;
    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    results.innerText = `${message}`;
}

function displayWinner (winner, message) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let results = document.getElementById('results');

    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    results.innerText = `${message}, ${winner}`;
}

