document.addEventListener("DOMContentLoaded", function() {

// API

var questionArray = []

var url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    questions = data.results
    questionArray = questions.concat({correct_answer: "", incorrect_answers:["", "", ""], question: "You Win!"})
    showQuestions (questionArray);
  })
  .catch(function(error) {
    console.error(error);
  });

// Global Variables

var questionNumber = 0;
var questionBlock = document.getElementsByClassName("questionText");
var answerBlock = document.getElementsByClassName("answerText");
var money = document.getElementsByClassName("money");
var reset = document.getElementsByClassName("reset");
var answersDiv = document.getElementById("answersDiv");
var questionsDiv = document.getElementById("questionSquare");
var fifty = document.getElementById("fifty");
var phoneFriend = document.getElementById("phoneFriend");

// Show Questions and Answers

function showQuestions () {
    for (var i = 0; i < questionBlock.length; i++) {
      questionBlock[0].innerHTML = questionArray[questionNumber].question;
    }
    answerArray = questionArray[questionNumber].incorrect_answers.concat(questionArray[questionNumber].correct_answer)
    shuffle(answerArray)
    function shuffle(answerArray) {
    var j, x, i;
    for (i = answerArray.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = answerArray[i];
        answerArray[i] = answerArray[j];
        answerArray[j] = x;
    }

    return answerArray;
}
    for (var i = 0; i < answerBlock.length; i++) {
      answerBlock[i].innerHTML = (answerArray[i])
    }
}

// Check if Correct

for (var i = 0; i < answerBlock.length; i++) {
  answerBlock[i].addEventListener("click", answerClick)
}

function answerClick() {
  if (this.innerHTML == questionArray[questionNumber].correct_answer) {
    questionNumber = questionNumber + 1;
    showQuestions (questions)
    winCheck ()
  }
  else {
    lossCheck()
  }
  scoreIncrease ();
}

// ScoreIncrease

function scoreIncrease() {
  for (var i = 0; i < money.length; i++) {
    money[10-questionNumber].classList.add("currentScore");
  }
}

// Check Loss

function lossCheck() {
  for (var i = 0; i < questionBlock.length; i++) {
    questionBlock[0].innerHTML = "<img src=\'https://cdn.images.express.co.uk/img/dynamic/1/285x214/89451_1.jpg' width=\'300px\' height=\'250px\'> <p>You lose. Press restart game to try again!<p>";
  }
  questionsDiv.classList.add("losswin");
  while (answersDiv.firstChild) {
    answersDiv.removeChild(answersDiv.firstChild);
  }
  questionNumber = 0
  for (var i = 0; i < money.length; i++) {
    money[i].classList.remove("currentScore");
  }
}

// Check Win

function winCheck() {
  if (questionNumber == 10) {
    for (var i = 0; i < questionBlock.length; i++) {
      questionBlock[0].innerHTML = " <img src=\'https://hips.hearstapps.com/digitalspyuk.cdnds.net/10/29/reality_tv_wwtbam_chris_tarrant_02.jpg' width=\'300px\' height=\'250px\'> <p>You just won £1,000,000!<p>";
    }
    questionsDiv.classList.add("losswin");
    while (answersDiv.firstChild) {
      answersDiv.removeChild(answersDiv.firstChild);
    }
  }
}

// Reset Game

for (var i = 0; i < reset.length; i++) {
  reset[i].addEventListener("click", restartGame)
}

function restartGame() {
  location.reload();
}

// 50/50

var answerText = document.getElementsByClassName("answerText");

fifty.addEventListener("click", fiftyClick);
function fiftyClick() {
  var incorrectAnswerArray = questionArray[questionNumber].incorrect_answers;
  var incorrectOptions = [];
  for (var i = 0; i < (answerText.length); i++) {
    if (incorrectAnswerArray.includes(answerText[i].innerHTML)) {
      incorrectOptions.push(answerText[i]);
    }
  }
  console.log(incorrectOptions);
  for (var i = 0; i < incorrectOptions.length; i += 2) {
    incorrectOptions[i].innerHTML = "_";
  }
  fifty.removeEventListener("click", fiftyClick);
  fifty.classList.add("usedLifeline");
  fifty.classList.remove("button");
}

// Phone a Friend
var answerBox = document.getElementsByClassName("answer");

phoneFriend.addEventListener("click", phoneFriendClick);

function phoneFriendClick () {
  for (var i = 0; i < answerArray.length; i++) {
    if (answerBlock[i].innerHTML == questionArray[questionNumber].correct_answer) {
      answerBox[i].classList.add("phoneFriend");
    }
  }
  phoneFriend.removeEventListener("click", phoneFriendClick);
  phoneFriend.classList.add("usedLifeline");
  phoneFriend.classList.remove("button");

}


});
