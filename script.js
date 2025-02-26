let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i === 1) {
        return "rock"
    } else if (i === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let keepgoing = false
    while(keepgoing == false) {
        let choice = prompt("Please enter your move: ")
        choice = choice.toLowerCase()
        if (choice === "rock" || choice === "paper" || choice === "scissors") {
            keepgoing = true
            return choice
        }  else {
            keepgoing = false 
        }
    }
}

function playRound(hc, cc) {
    let humanChoice = hc
    let computerChoice = cc
    if (humanChoice == computerChoice) {
        return "Draw! You played the same hand"
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        return "You lose! Paper beats Rock"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "You win! Paper beats Rock"
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        return "You win! Scissors beats Paper"
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        return "You lose! Scissors beats Paper"
    } else if(humanChoice =="scissors" && computerChoice =="rock") {
        return "You lose! Rock beats Scissors"
    } else if(humanChoice =="rock" && computerChoice =="scissors") {
        return "You win! Rock beats Scissors"
    }
}

console.log(playRound(getHumanChoice(), getComputerChoice()));