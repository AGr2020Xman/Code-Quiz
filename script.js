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

var highscoreHistoryStorage = [];
// time to be relative to the QUESTIONS - therefore increasing questions in future = more time
var timerCountdown = questions.length * 20;
var interval;


// starting quiz section
  
  
  
  // start quiz function defined
  var startQuiz = () => {
    // hide starting screen
    start.addClass("fade");
  // reveal questions
  question.addClass("active");
  // nextQuestion function to currentQuestion
  nextQuestion(currentQuestion);
};


  
var currentQuestion;
for (i )


// how to access an Object
// accessible directly in HTML
questionTitle = questions[i].title
// created entried in HTML
answer 


// nextQuestion function defined
var nextQuestion = () => {
  // 
  if (number <= questions.length - 1) {
    questionTitle.text(questions[number].title);
    next.empty();
    
    questions[number].choices.forEach((item, index) => {
      var answer = $(`<button class="answer">${index + 1}. ${item}</button>`);
      next.append(answer);
    });
  } else {
    question.removeClass("active");
    finalScreen.addClass("active");
    clearInterval(interval);
    if (timerCountdown < 0) {
      timeRemaining.text(0);
      yourScore.text(0);
    } else {
      yourScore.text(timerCountdown);
      timeRemaining.text(timerCountdown);
    }
  }
};

// TO ADD SOUNDS [might get time/too hard] - NEEDS THIS with a conditional 

// // $(document).on('click','.answer', function() {
//   if (this.innerText.slice(3,this.innerText.length) === questions[currentQuestion].answer)
// })




// user presses start quiz button
startButton.on('click', function() {
  // startquiz function hides start screen and shows questions module
  startQuiz();
  interval = setInterval(() => {
    if (timerCountdown <=0) {
      timerCountdown = 0;
      return
    }
    timerCountdown--;
    timeRemaining.text(timerCountdown);
  }, 1000);
});

// submitting scores

submit.on('click', function() {
  // if score has gone negative intger due to incorrect answers, reset to 0, minimum score
  if (timerCountdown < 0) {
    timerCountdown = 0;
  }
  // if initials are recorded (even if blank)
  if (initialsInput.val()){
    // push to storage array as an object recording name: and Highscore: time
    highscoreHistoryStorage.push({name: initialsInput.val(), viewHighscores: timerCountdown});
    // clear input
    initialsInput.val('');
    // send score to local storage, stringify for proper storage
    localStorage.setItem('viewHighscore', JSON.stringify(highscoreHistoryStorage))
    // show history of stored scores
    highscoreHistory.addClass('active');
    // call stored data from local storage
    getHighscoreHistory();
  }
  // remove the final screen page
  finalScreen.removeClass('active');
  // allow the start screen to return
  start.removeClass('fade');
  currentQuestion = 0 //DEPENDENT ON HOW LOOPING WORKS FOR ACCESSING INDEXED OBJECTS //
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
      `<div class="highscoreItem">${index + 1}. ${item.name} <span class="savedScore">${item.viewHighscores}</span></div>`
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
