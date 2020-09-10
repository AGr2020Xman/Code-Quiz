var questions = [
  {
    title: "Dummy text",
    choices: [
      { id: 1, diplayText: "1" },
      { id: 2, diplayText: "2" },
      { id: 3, diplayText: "3" },
      { id: 4, diplayText: "4" },
    ],
    answerId: 1,
  },
  {
    title: "Dummy text",
    choices: [
      { id: 1, diplayText: "1" },
      { id: 2, diplayText: "2" },
      { id: 3, diplayText: "3" },
      { id: 4, diplayText: "4" },
    ],
    answerId: 2,
  },
  {
    title: "Dummy text",
    choices: [
      { id: 1, diplayText: "1" },
      { id: 2, diplayText: "2" },
      { id: 3, diplayText: "3" },
      { id: 4, diplayText: "4" },
    ],
    answerId: 3,
  },
  {
    title: "Dummy text",
    choices: [
      { id: 1, diplayText: "1" },
      { id: 2, diplayText: "2" },
      { id: 3, diplayText: "3" },
      { id: 4, diplayText: "4" },
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
