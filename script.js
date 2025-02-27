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

function playRound(choice) {
    let hc = choice;
    let cc = getComputerChoice();
    if (hc === cc) {
        return "Draw! You played the same hand.";
    } else if ((hc === "rock" && cc === "scissors") ||
               (hc === "paper" && cc === "rock") ||
               (hc === "scissors" && cc === "paper")) {
        humanScore++;
        return `You win! ${hc} beats ${cc}`;
    } else {
        computerScore++;
        return `You lose! ${cc} beats ${hc}`;
    }
}

const body = document.querySelector("body");

const display = document.createElement("div");
const displayhs = document.createElement("div")
const displaycc = document.createElement("div");
display.textContent = "Make your choice";
body.appendChild(display);
body.appendChild(displayhs);
body.appendChild(displaycc);

["rock", "paper", "scissors"].forEach((choice) => {
    const button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", () => {
        display.textContent = playRound(choice);
        displayhs.textContent = humanScore;
        displaycc.textContent = computerScore;
    });
    body.appendChild(button);
});

