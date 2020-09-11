var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: [
      { id: 1, displayText: "alerts" },
      { id: 2, displayText: "booleans" },
      { id: 3, displayText: "numbers" },
      { id: 4, displayText: "strings" },
    ],
    answerId: 1,
  },
  {
    title:
      "The condition in an if/else statement is enclosed within __________",
    choices: [
      { id: 1, displayText: "curly braces" },
      { id: 2, displayText: "parentheses" },
      { id: 3, displayText: "quotes" },
      { id: 4, displayText: "square brackets" },
    ],
    answerId: 2,
  },
  {
    title: "Arrays in JavaScript can be used to store __________",
    choices: [
      { id: 1, displayText: "booleans" },
      { id: 2, displayText: "numbers and strings" },
      { id: 3, displayText: "other arrays" },
      { id: 4, displayText: "all of the above" },
    ],
    answerId: 4,
  },
  {
    title:
      "String values must be enclosed within __________ when being assigned to variables.",
    choices: [
      { id: 1, displayText: "commas" },
      { id: 2, displayText: "curly braces" },
      { id: 3, displayText: "quotes" },
      { id: 4, displayText: "parentheses" },
    ],
    answerId: 3,
  },
  {
    title:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: [
      { id: 1, displayText: "JavaScript" },
      { id: 2, displayText: "terminal/bash" },
      { id: 3, displayText: "for loops" },
      { id: 4, displayText: "console.log" },
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
let questionScreen = $("#question");
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

var highscoreHistoryStorage = [];

// time to be relative to the QUESTIONS - therefore increasing questions in future = more time
var timerCountdown = questions.length * 15;

var interval;
var currentQuestion = 0;
var penalty = 5;

// show/hide screens responsively to stage of quiz
var showScreen = (name) => {
  if (name == "start") {
    start.show();
  } else {
    start.hide();
  }
  if (name == "highscoreHistory") {
    highscoreHistory.show();
  } else {
    highscoreHistory.hide();
  }
  if (name == "questionScreen") {
    questionScreen.show();
  } else {
    questionScreen.hide();
  }
  if (name == "finalScreen") {
    finalScreen.show();
  } else {
    finalScreen.hide();
  }
};

// start quiz function
var startQuiz = () => {
  // hide starting screen
  showScreen("questionScreen");
  // reset default settings to reset quiz
  resetDefault();
  // start timer
  startTimer();
  // displayQuestion function to currentQuestion
  displayQuestion();
};

// variable quiz defaults
var resetDefault = () => {
  currentQuestion = 0;
  timerCountdown = questions.length * 15;
};

// displayQuestion function defined
var displayQuestion = () => {
  // set questions to draw from questions index
  var question = questions[currentQuestion];
  if (question) {
    populateQuestionHTML(question);
  } else {
    displayFinalScreen();
  }
};

//
var populateQuestionHTML = (question) => {
  questionTitle.text(question.title);
  next.empty();

  question.choices.forEach((item, index) => {
    var answer = $(
      `<button class="answer btn-secondary btn-block text-left">${index + 1}. ${
        item.displayText
      }</button>`
    );
    // WHEN answer btn is clicked
    answer.on("click", function () {
      // THEN check if the answer user selected is CORRECT or not
      isCorrectAnswer = question.answerId === item.id;
      if (isCorrectAnswer) {
        showFeedback(isCorrectAnswer);
        timerCountdown += 5;
      } else {
        // IF answer is incorrect - penalise time (10s)
        showFeedback(isCorrectAnswer);
        timerCountdown -= 10;
      }

      // REGARDLESS of correct/incorrect - displayNextQuestion
      currentQuestion++;
      displayQuestion();
    });
    next.append(answer);
  });
};

var showFeedback = (isCorrectAnswer) => {
  let correctFeedback = $("#correct");
  let incorrectFeedback = $("#incorrect");

  // flash result of previous answer
  if (isCorrectAnswer) {
    correctFeedback.show().fadeOut(1000);
    incorrectFeedback.hide();
  } else {
    incorrectFeedback.show().fadeOut(1000);
    correctFeedback.hide();
  }
};

// display final screen - stop counters - if counter <0, return to 0 which is minimum score
var displayFinalScreen = () => {
  endTimer();
  timeRemaining.text(timerCountdown);
  yourScore.text(timerCountdown);
  if (timerCountdown < 0) {
    timerCountdown = 0;
  }
  showScreen("finalScreen");
};

// start the timer
var startTimer = () => {
  timeRemaining.text(timerCountdown);
  interval = setInterval(() => {
    if (timerCountdown <= 0) {
      timerCountdown = 0;
      displayFinalScreen();
      return;
    }
    timerCountdown--;
    timeRemaining.text(timerCountdown);
  }, 1000);
};

// cease the timer - ensure the timeRemaining is = to the countdown
var endTimer = () => {
  clearInterval(interval);
  timeRemaining.text(timerCountdown);
};

// get the highscore history function
var getHighscoreHistory = () => {
  // clear highscore element
  scoreList.empty();
  // JSON parse
  if (localStorage.getItem("viewHighscores")) {
    highscoreHistoryStorage = JSON.parse(
      localStorage.getItem("viewHighscores")
    );
    // compare function parameter in .sort() function to organise score values
    highscoreHistoryStorage.sort((a, b) => {
      return b.viewHighscores - a.viewHighscores;
    });
  }

  // for EACH item and index, create entry under scoreList with target-able classes
  highscoreHistoryStorage.forEach((item, index) => {
    var itemValue = $(
      `<div class="highscoreItem">${index + 1}. ${
        item.name
      } <span class="savedScore">: ${item.viewHighscores}</span></div><hr>`
    );
    // append to scoreList in the scores section, under the highscoreHistory article
    scoreList.append(itemValue);
  });
};

// opening functions - show the start screen - get the current highscore history
showScreen("start");
getHighscoreHistory();

// user presses start quiz button
startButton.on("click", function () {
  // startquiz function hides start screen and shows questions module
  startQuiz();
});

// submitting scores
submit.on("click", function () {
  // if score has gone negative intger due to incorrect answers, reset to 0, minimum score
  if (timerCountdown < 0) {
    timerCountdown = 0;
  }
  // if initials are recorded (even if blank)
  if (initialsInput.val()) {
    // push to storage array as an object recording name: and Highscore: time
    highscoreHistoryStorage.push({
      name: initialsInput.val(),
      viewHighscores: timerCountdown,
    });
    // clear input
    initialsInput.val("");
    // send score to local storage, stringify for proper storage
    localStorage.setItem(
      "viewHighscores",
      JSON.stringify(highscoreHistoryStorage)
    );
    // show history of stored scores
    showScreen("highscoreHistory");
    // call stored data from local storage
    getHighscoreHistory();
  }
});

// view HS button
viewHighscores.on("click", function () {
  showScreen("highscoreHistory");
  endTimer();
  timerCountdown = 0;
});

// Back to start button
goBack.on("click", function () {
  showScreen("start");
  timerCountdown = 0;
  timeRemaining.text(timerCountdown);
});

// empty local storage array
clearHighscore.on("click", function () {
  localStorage.setItem("viewHighscores", JSON.stringify([]));
  getHighscoreHistory();
});
