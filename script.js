var questions = [
  {
    title: "Commonly used data types DO NOT inlude:",
    choices: [
      { id: 1, diplayText: "alerts" },
      { id: 2, diplayText: "booleans" },
      { id: 3, diplayText: "numbers" },
      { id: 4, diplayText: "strings" },
    ],
    answerId: 1,
  },
  {
    title:
      "The condition in an if/else statement is enclosed within __________",
    choices: [
      { id: 1, diplayText: "curly braces" },
      { id: 2, diplayText: "parentheses" },
      { id: 3, diplayText: "quotes" },
      { id: 4, diplayText: "square brackets" },
    ],
    answerId: 2,
  },
  {
    title: "Arrays in JavaScript can be used to store __________",
    choices: [
      { id: 1, diplayText: "booleans" },
      { id: 2, diplayText: "numbers and strings" },
      { id: 3, diplayText: "other arrays" },
      { id: 4, diplayText: "all of the above" },
    ],
    answerId: 4,
  },
  {
    title:
      "String values must be enclosed within __________ when being assigned to variables.",
    choices: [
      { id: 1, diplayText: "commas" },
      { id: 2, diplayText: "curly braces" },
      { id: 3, diplayText: "quotes" },
      { id: 4, diplayText: "parentheses" },
    ],
    answerId: 3,
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the degugger is:",
    choices: [
      { id: 1, diplayText: "JavaScript" },
      { id: 2, diplayText: "terminal/bash" },
      { id: 3, diplayText: "for loops" },
      { id: 4, diplayText: "console.log" },
    ],
    answerId: 4,
  },
];

// things I need to target (with jQuery)

// link to View Highscores
let viewHighscores = $("#highscores");
// Countdown value
let timeRemaining = $("#time-remaining");
// Start screen
let start = $("#start");
// Start button
let startButton = $("#start-button");
// question screen
let question = $("#question");
// rotate questions
let questionTitle = $("#question-title");
// next button
let next = $("#next-question-button");
// final screen
let finalScreen = $("#end-quiz-screen");
// your score for the quiz
let yourScore = $("#yourScore");
// initials for key/value highscore
let initialsInput = $("#initialsInput");
// submit score
let submit = $("#submit-score-button");
// highscores history section
let highscoreHistory = $("#hHistory");
// stored highscores
let scoreList = $("#scores-list");
// return/goback to start screen
let goBack = $("#return");
// clear saved (from local storage) scores
let clearHighscore = $("#clear-scores");

// variables setting

var highscoreHistory = [];
// time to be relative to the QUESTIONS - therefore increasing questions in future = more time
var timerCountdown = questions.length * 20;

// TODO: scoreboard, timer

function setTimer() {
  var timerInterval = setInterval(() => {
    timeRemaining--;
    timer.textContent("Time: " + timeRemaining);

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      // stopshowing questions display: none
      // display yourScore
      yourScore.textContent("Your score: " + secondsLeft);
    }
  }, interval);
}

// start the countdown timer

// start button () => { launches quiz and begins timer ( 90s ) => }
// HTML visually to change from "Welcome Screen" to "Question 1"
// Set layout to have changeable div... probably need BLAH.innerHTML . maybe appendChild....
