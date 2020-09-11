# Code Quiz

As I proceed further in into my career as a web developer, I will probably be asked to complete a coding assessment. This project addresses this with a combination of multiple-choice questions and interactive challenges. I've built a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

## Contents

- index.html, script.js, style.css, Assets (images and originally provided demo)

## User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

### Code

The HTML is created and removed dynamically through JavaScript. DOM targeting and other skills were important in this task. jQuery was utilised to simplify some of this targeting.
The quiz is also modular - such that in it's current state, you may add infinite questions to the quiz, and adjust the extra time per question from 15s.

Clear single-responsibility is assigned to most functions, with room to add more. The page is also responsive thanks to some help from Bootstrap.

#### Same of deployed application

_Starting page_
![](Assets/startpage.jpg)

_Quiz questions created on start_
![](Assets/quizquestions.jpg)

_Final submission page for your score_
![](Assets/finalsubmission.jpg)

_Highscores board_
![](Assets/highscores.jpg)

#### Deployed application

Link: https://agr2020xman.github.io/Code-Quiz/

### Authors

- Original code by bootstrap used as framework
- Code by \_Andr&eacute; Grech - 27/8/2020
- CSS is a mixture of custom styles and Bootstrap presets to assist in responsiveness

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
