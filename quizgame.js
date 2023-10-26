const prompt = require("prompt-sync")()

console.log("Welcome to the simple math quiz!")

let correctAnswers = 0;
const totalQuestions = 4;

const answer1 = prompt("What is 1 + 1? ");
const correct_answer1 = "2"

if (answer1 === correct_answer1) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Incorrect!")
}

const answer2 = prompt("What is the symbol for addition? ");
const correct_answer2 = "+"

if (answer2 === correct_answer2) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Incorrect!")
}

const answer3 = prompt("What is + ? ");
const correct_answer3 = "addition"

if (answer3 === correct_answer3) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Incorrect!")
}

const answer4 = prompt("What is 6 x 9? ");
const correct_answer4 = "54"

if (answer4 === correct_answer4) {
    console.log("Correct!");
    correctAnswers++;
} else {
    console.log("Incorrect!")
}

const percentage = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!")
console.log("You scored", percentage.toString() + "%")