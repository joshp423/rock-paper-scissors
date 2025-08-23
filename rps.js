let humanScore = 0;
let computerScore = 0;
let computerChoice = 0;
let humanChoice = "";
let message = "";
let roundCounter = 0;

let buttons = document.getElementById('controlButtons');

buttons.addEventListener('click', (event) => {
    let target = event.target;
    computerChoice = getComputerChoice();
    switch(target.id) {
        case 'Rock':
            if (roundCounter < 4) {
                roundCounter++;
                humanChoice = target.id.toLowerCase();
                console.log(humanChoice, computerChoice, roundCounter)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message, computerChoice, roundCounter);
                break;
            }
            roundCounter++;
            humanChoice = target.id.toLowerCase();
            console.log(humanChoice, computerChoice, roundCounter)
            playRound(humanChoice, computerChoice);
            winnerLogic(humanScore, computerScore);
            displayWinner (winner, message, roundCounter, computerChoice)
            break;
        case 'Paper':
            if (roundCounter < 4) {
                roundCounter++;
                humanChoice = target.id.toLowerCase();
                console.log(humanChoice, computerChoice, roundCounter)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message, computerChoice, roundCounter);
                break;
            }
            roundCounter++;
            humanChoice = target.id.toLowerCase();
            console.log(humanChoice, computerChoice, roundCounter)
            playRound(humanChoice, computerChoice);
            winnerLogic(humanScore, computerScore);
            displayWinner (winner, message, roundCounter, computerChoice)
            break;
        case "Scissors":
            if (roundCounter < 4) {
                roundCounter++;
                humanChoice = target.id.toLowerCase();
                console.log(humanChoice, computerChoice, roundCounter)
                playRound(humanChoice, computerChoice);
                displayScore (humanScore, computerScore, message, computerChoice, roundCounter);
                break;
            }
            roundCounter++;
            humanChoice = target.id.toLowerCase();
            console.log(humanChoice, computerChoice, roundCounter)
            playRound(humanChoice, computerChoice);
            winnerLogic(humanScore, computerScore);
            displayWinner (winner, message, roundCounter, computerChoice)
            break;
    }
});

function winnerLogic(humanScore, computerScore){
    if (humanScore > computerScore) {
        winner = "You win the game!"
    }
    else if (humanScore < computerScore) {
        winner = "You lose the game!"
    }
    else {
        winner = "Tie game! Play again to decide the winner"
    }
};

function getComputerChoice() {
    computerRng = Math.random()
    if (computerRng < 0.34) {
        return "Rock";
    }
    else if (computerRng >= 0.34 && computerRng < 0.66) {
        return "Paper";
    }
    else {
        return "Scissors";
    };
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "Rock") {
            message = "Tie!";
            return;
        }
        else if (computerChoice === "Paper") {
            message = "You lose! Paper beats rock.";
            computerScore ++;
            return;
        }
        else {
            message = "You win! Rock beats scissors.";
            humanScore ++;
            return;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "Rock") {
            message = "You win! Paper beats rock.";
            humanScore ++;
            return;        
        }
        else if (computerChoice === "Paper") {
            message = "Tie!"
            return;
        }
        else {
            message = "You lose! Scissors beats paper.";
            computerScore ++;
            return;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "Rock") {
            message = "You lose! Rock beats scissors.";
            computerScore ++;
            return;        
        }
        else if (computerChoice === "Paper") {
            message = "You win! Scissors beats paper.";
            humanScore ++;
            return;
        }
        else {
            message = "Tie!";
            return;
        }
    }
};


function displayScore (humanScore, computerScore, message, computerChoice, roundCounter) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let cChoiceDisplay = document.getElementById('cSelection');
    let results = document.getElementById('results');
    let round = document.getElementById('round');

    cChoiceDisplay.innerText = `Computer Choice: ${computerChoice}`;
    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    results.innerText = `${message}`;
    round.innerText = `Round: ${roundCounter}`;
}

function displayWinner (winner, message, roundCounter) {
    let hScoreDisplay = document.getElementById('hScore');
    let cScoreDisplay = document.getElementById('cScore');
    let cChoiceDisplay = document.getElementById('cSelection');
    let results = document.getElementById('results');
    let round = document.getElementById('round');

    cChoiceDisplay.innerText = `Computer Choice: ${computerChoice}`;
    hScoreDisplay.innerText = `Human Score: ${humanScore}`;
    cScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    results.innerText = `${message} - ${winner}`;
    round.innerText = `Round: ${roundCounter}`;
}

