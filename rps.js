function getComputerChoice() {
    return Math.random();
}

console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = String(window.prompt("Rock, Paper, Scissors?", ""));
    return humanChoice;
}

console.log(getHumanChoice())