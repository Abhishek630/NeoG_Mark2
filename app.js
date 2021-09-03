/* Libraries required  */
const chalk = require("chalk");
var readLineSync = require("readline-sync");
const error = chalk.keyword("red");
const correct = chalk.keyword("green");
/* Welcoming the User  */
console.log(chalk.cyan("----------------------------------------------"));
console.log(
  chalk.redBright.bold("    🤩 WELCOME! TO THE ULTIMATE HARRY POTTER TRIVIA 🤩")
);
console.log(chalk.cyan("----------------------------------------------"));
var username = readLineSync.question("What is your name? ");
console.log(chalk.yellow("Hi " + username + " !"));
console.log("Let's see if you are a true Harry Potter fan 🥰");

/* Leaderboard Information  */
var leaderBoard = [
  { name: "Aditya", score: 5 },
  { name: "Vishal", score: 4 },
  { name: "Aman", score: 3 },
];

/* Questions array  */
var questions = [
  {
    question: "Q1. how many books Harry Potter have?",
    option1: 6,
    option2: 7,
    answer: "b",
  },
  {
    question: "Q2. In which house Harry was",
    option1: "Slytherin",
    option2: "Gryfindor",
    answer: "b",
  },
  {
    question:
      "Q3.What was the name of hat which is used to gave students house? ",
    option1: "Bolti Topi",
    option2: "Sorting hat",
    answer: "ba",
  },
  {
    question: "Q4. What is spell to unlock",
    option1: "alohomora",
    option2: "ariel",
    answer: "a",
  },
  {
    question: "Q5. What is the name of Harry's owl",
    option1: "Hedwig",
    option2: "Scabbers",
    answer: "a",
  },
];
/* Total Score */
var score = 0;

/* Function that drives the game  */
function play(question, answer) {
  var q = readLineSync.question("choose one: ");
  if (q.toLowerCase() == answer) {
    console.log(correct("✅ This is correct!"));
    score++;
  } else {
    console.log(error("😞 This is incorrect!"));
  }
}

/* Loop that calls the function everytime */
for (var i = 0; i < questions.length; i++) {
  var currentq = questions[i];
  console.log(currentq.question);
  console.log(chalk.blue("a) " + currentq.option1));
  console.log(chalk.blue("b) " + currentq.option2));
  play(currentq.question, currentq.answer);
}

/* Final Score Display  */
console.log("Your final score is : " + score + "/5 🤩");
finalend = 0;
var a = { name: username, score: score };
for (var j = 0; j < leaderBoard.length; j++) {
  var c = leaderBoard[j];
  if (score >= c.score) {
    finalend = 1;
    leaderBoard.splice(j, 0, a);
    break;
  }
}
if (finalend === 0) {
  leaderBoard.push(a);
}
console.log(chalk.yellow("------------------------------"));
console.log(chalk.yellow("         🥳LEADERBOARD🥳           "));
for (var k = 0; k < leaderBoard.length; k++) {
  console.log(leaderBoard[k].name + "     - " + leaderBoard[k].score);
}
console.log(chalk.yellow("------------------------------"));
console.log("THANKYOU FOR PLAYING!");
