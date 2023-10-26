const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

for (let num = 0; num < 5; num++) {
    const choice = prompt("Enter rock, paper, or scissors: ");

    if (choice !== "rock" && choice !== "paper" && choice !== "scissors"){
        console.log("Please try again.");
    }
    
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.round(Math.random() * 2);
    const computerChoice = choices[randomIndex];
    
    if (computerChoice === choice){
        console.log("Draw!");
        ties++;
    } else if ((choice === "paper" && computerChoice === "rock") || (choice === "rock" && computerChoice === "scissors ") || (choice === "scissors" && computerChoice === "paper")){
        console.log("You won!");
        wins++;
    } else {
        console.log("You lost!")
        losses++;
    }
    
}
console.log("Game Over!")
console.log("Wins: ", wins)
console.log("Losses: ", losses)
console.log("Ties: ", ties)