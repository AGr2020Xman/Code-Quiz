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

// variables setting

// TODO: scoreboard, timer

var score = 0;
var timerLeft = 0;
var timer;

// start the countdown timer

function start() {
  timerLeft = 90;
  $("#timerLeft");

  setInterval(() => {}, 1000);
}

// start button () => { launches quiz and begins timer ( 90s ) => }
// HTML visually to change from "Welcome Screen" to "Question 1"
// Set layout to have changeable div... probably need BLAH.innerHTML . maybe appendChild....
