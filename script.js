var questions = [
  {
    title: "Commonly used data types DO NOT inlude:",
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
      "A very useful tool used during development and debugging for printing content to the degugger is:",
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
var timerCountdown = questions.length * 20;
var interval;
var currentQuestion = 0;
var penalty = 5;
// starting quiz section

// start quiz function defined

var startQuiz = () => {
  // hide starting screen
  start.addClass("fade");
  // reveal questions
  questionScreen.addClass("active");
  // start timer
  startTimer();
  // displayQuestion function to currentQuestion
  displayQuestion();
  // currentQuestion = displayQuestion(currentQuestion);
};

// start quiz >> display question
// user picks answer >> displayQuestion
// if no displayQuestion >> Display score & prompt for initials
// if initials.val() >> save score and display Highscore List

// var displayQuestion = (questionToDisplay) => {
//   // generic display question
//   questionTitle.text(questionToDisplay.title);
//   next.empty();

//   questionToDisplay.choices.forEach((item, index) => {

//     var answer = $(
//       `<button id=${index} class="answer">${index + 1}. ${item.displayText}</button>`
//     );
//     next.append(answer);
//   });

// THIS MIGHT HELP CONNECT THE start AND displayQuestion functions
// var compare = (event) => {
//   var answerElement = event.target;
//   if (answerElement.matches("button")) {
//     // var createCorrect = document.createElement("div");
//     // createCorrect.setAttribute("id", "createCorrect");
//     // if (answerElement.textContent == questions[currentQuestion].answerId) {
//       timerCountdown += 5;
//       // createCorrect.textContent = "Correct!";
//     } else {
//       timeRemaining = timeRemaining - penalty;
//       // createCorrect.textContent = "Incorrect!";
//     }
//   }
//   currentQuestion++;
// };

// displayQuestion function defined
var displayQuestion = () => {
  // find out if previous answer is true/false
  resolvePreviousAnswer(true);
  var question = questions[currentQuestion];
  if (question) {
    populateQuestionHTML(question);
  } else {
    displayFinalScreen();
  }
};

var populateQuestionHTML = (question) => {
  questionTitle.text(question.title);
  next.empty();

  question.choices.forEach((item, index) => {
    var answer = $(
      `<button class="answer">${index + 1}. ${item.displayText}</button>`
    );
    answer.on("click", clickAnswer);
    next.append(answer);
  });
};

// Hello Carlin - this is a QUIZ application
// It is giving me aids
// I got too complicated and so we have now started subdividing my functions
// Basic functionality is
// USER presses start quiz (and a timer starts) > questions come up with answers
// user selects answer > if correct YAY next question
// >> if incorrect - BOO lose 5 seconds, next questions
// after answering last question - Timer STOPS; time = yourScore
// User prompted to save highscore
// may view sorted scores list OR go back to start and try again

var clickAnswer = (answer) => {
  console.log(answer);
};

var displayFinalScreen = () => {
  endTimer();
};

var resolvePreviousAnswer = (wasThatCorrect) => {
  // HTML to display CORRECT or INCORRECT
  if (wasThatCorrect) {
    correctFlash = $('<div class="flash">Correct!</div>');
    questionScreen.append(correctFlash);
  } else {
    // display INCORRECT in DOMS + apply penalty?
    incorrectFlash = $('<div class="flash">Incorrect!</div>');
    questionScreen.append(incorrectFlash);
    timerCountdown -= 5;
  }
};

//
//   debugger;

//   if (currentQuestion <= questions.length - 1) {
//     questionTitle.text(questions[currentQuestion].title);
//     next.empty();

//     questions[currentQuestion].choices.forEach((item, index) => {
//       var answer = $(
//         `<button class="answer">${index + 1}. ${item.displayText}</button>`
//       );
//       next.append(answer);
//     });
//     $('.answer').on('click',(compare));
//   } else {
//     questionScreen.removeClass("active");
//     finalScreen.addClass("active");
//     clearInterval(interval);
//     if (timerCountdown < 0) {
//       timeRemaining.text(0);
//       yourScore.text(0);
//     } else {
//       yourScore.text(timerCountdown);
//       timeRemaining.text(timerCountdown);
//     }
//   }
// };

// TO ADD SOUNDS [might get time/too hard] - NEEDS THIS with a conditional

// // $(document).on('click','.answer', function() {
//   if (this.innerText.slice(3,this.innerText.length) === questions[currentQuestion].answer)
// })

// user presses start quiz button
startButton.on("click", function () {
  // startquiz function hides start screen and shows questions module
  startQuiz();
});

var startTimer = () => {
  interval = setInterval(() => {
    if (timerCountdown <= 0) {
      timerCountdown = 0;
      return;
    }
    timerCountdown--;
    timeRemaining.text(timerCountdown);
  }, 1000);
};

var endTimer = () => {
  clearInterval(interval);
};

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
      "viewHighscore",
      JSON.stringify(highscoreHistoryStorage)
    );
    // show history of stored scores
    highscoreHistory.addClass("active");
    // call stored data from local storage
    getHighscoreHistory();
  }
  // remove the final screen page
  finalScreen.removeClass("active");
  // allow the start screen to return
  start.removeClass("fade");
  currentQuestion = 0; //DEPENDENT ON HOW LOOPING WORKS FOR ACCESSING INDEXED OBJECTS //
  timerCountdown = questions.length * 20;
  timeRemaining.text(0);
});

// ending quiz section

// HighScore History section

// set local storage array
localStorage.setItem("viewHighscores", JSON.stringify([]));

// get locally stored scores function expressed
var getHighscoreHistory = () => {
  // clear highscore board
  scoreList.empty();
  if (localStorage.getItem("viewHighscores")) {
    highscoreHistoryStorage = JSON.parse(
      localStorage.getItem("viewHighscores")
    );
    // compare function parameter in .sort() function to organise score values
    highscoreHistoryStorage.sort((a, b) => {
      b.viewHighscores - a.viewHighscores;
    });
  }
  // for EACH item and index, create entry under scoreList with target-able classes
  highscoreHistoryStorage.forEach((item, index) => {
    var itemValue = $(
      `<div class="highscoreItem">${index + 1}. ${
        item.name
      } <span class="savedScore">${item.viewHighscores}</span></div>`
    );
    // append to scoreList in the scores section, under the highscoreHistory article
    $("scoreList").append(itemValue);
  });
};

getHighscoreHistory();

// programming onclick button functions to reveal/hide the corresponding article on page
viewHighscores.on("click", function () {
  highscoreHistory.addClass("active");
});

goBack.on("click", function () {
  highscoreHistory.removeClass("active");
});

// empty local storage array
clearHighscore.on("click", function () {
  localStorage.setItem("viewHighscores", JSON.stringify([]));
});

// End HighScore History section
