let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function getComputerChoice() {
    return Math.random();
}

function getHumanChoice() {
   return String(window.prompt("Rock, Paper, Scissors?", ""));
}

let buttons = document.querySelector('controlButtons');
buttons.addEventListener('click'), (event) => {
    let target = event.target;

    switch(target.id) {
        case 'Rock':
            humanChoice = target.id;
            break;
        case 'Paper':
            humanChoice = target.id;
            break;
        case "Scissors":
            humanChoice = target.id;
            break;
    }
};

// function playGame() {
//     let i = 0;
//     let message = "";
//     function playRound(humanChoice, computerChoice) {

//     if (humanChoice = "rock") {
//         if (computerChoice < 0.34) {
//             message = "tie!"
//             console.log(message)
//             return;
//         }
//         else if (computerChoice > 0.33 && computerChoice < 0.66) {
//             message = "you lose! paper beats rock"
//             console.log(message)
//             computerScore ++;
//             return;
//         }
//         else if (computerChoice >= 0.67) {
//             message = "you win! rock beats scissors"
//             console.log(message)
//             humanScore ++;
//             return;
//         }
//     }
//     else if (humanChoice = "paper") {
//         if (computerChoice < 0.34) {
//             message = "you win! paper beats rock"
//             console.log(message)
//             humanScore ++;
//             return;        
//         }
//         else if (computerChoice > 0.33 && computerChoice < 0.66) {
//             message = "tie!"
//             console.log(message)
//             return;
//         }
//         else if (computerChoice >= 0.67) {
//             message = "you lose! scissors beats paper"
//             console.log(message)
//             computerScore ++;
//             return;
//         }
//     }
//     else if (humanChoice = "scissors") {
//         if (computerChoice < 0.34) {
//             message = "you lose! rock beats scissors"
//             console.log(message)
//             computerScore ++;
//             return;        
//         }
//         else if (computerChoice > 0.33 && computerChoice < 0.66) {
//             message = "you win! scissors beats paper"
//             console.log(message)
//             humanScore ++;
//             return;
//         }
//         else if (computerChoice >= 0.67) {
//             message = "tie!"
//             console.log(message)
//             return;
//         }
//     }
// }
//     while (i < 5) {
//         let humanChoice = getHumanChoice().toLowerCase();
//         let computerChoice = getComputerChoice();
//         playRound(humanChoice, computerChoice)
//         console.log(humanScore, computerScore)
//         i ++;
//     }
//     let winner = ""
//     if (humanScore > computerScore) {
//         winner = "you win!"
//     }
//     else {
//         winner = "you lose!"
//     }
//     console.log(winner)
//     return;
// }

// playGame()
