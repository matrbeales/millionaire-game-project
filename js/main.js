document.addEventListener("DOMContentLoaded", function() {

// Questions

// var questions = [
//   {
//     question: "Which city hosted the Olympic games in 1992?",
//     answers: ["Paris", "Barcelona", "Berlin", "Rome"],
//     correctAnswer: "Barcelona"
//   },
//
//   {
//     question: "Who directed the 1990 film Miller's Crossing?",
//     answers: ["Steven Spielberg", "Quentin Tarantino", "The Coen Brothers", "James Cameron"],
//     correctAnswer: "The Coen Brothers"
//   },
//   {
//     question: "What year did the American Civil War start?",
//     answers: ["1851","1861","1871","1881"],
//     correctAnswer: "1861"
//   },
//   {
//     question: "What is the capital city of Nicaragua?",
//     answers: ["Managua", "Leon", "San Jose", "San Salvador"],
//     correctAnswer: "Managua"
//   },
//   {
//     question: "What was named the world's ugliest animal by the Ugly Animal Preservation Society in 2013?",
//     answers: ["Kakapo", "Mole Rat", "Probiscis Monkey", "Blobfish"],
//     correctAnswer: "Blobfish"
//   },
//   {
//     question: "Who won the 1974 Fifa World Cup?",
//     answers: ["West Germany", "Brazil", "Uruguay", "Italy"],
//     correctAnswer: "West Germany"
//   },
//   {
//     question: "Who released the 1998 album Aquemini?",
//     answers: ["The Notorious BIG", "Tupac", "Outkast", "Nas"],
//     correctAnswer: "Outkast"
//   },
//   {
//     question: "The correct answer is D?",
//     answers: ["A", "B", "C", "D"],
//     correctAnswer: "D"
//   },
//   {
//     question: "The correct answer is B?",
//     answers: ["A", "B", "C", "D"],
//     correctAnswer: "B"
//   },
//   {
//     question: "The correct answer is A?",
//     answers: ["A", "B", "C", "D"],
//     correctAnswer: "A"
//   },
//   {
//     question: "YOU WIN",
//     answers: ["","","",""]
//   }
// ]

// API

var questionArray = []

const url = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple"
fetch(url)
  .then((resp) => resp.json())
  .then(function(data){
    console.log(data.results)
    questions = data.results
    questionArray = questions
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

// Show Questions and Answers

var answerArray =[]

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
    console.log(answerArray)
}
    for (var i = 0; i < answerBlock.length; i++) {
      answerBlock[i].innerHTML = answerArray[i]

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
    alert("Correct")
    winCheck ()
  }
  else {
    lossCheck()
  }
  scoreIncrease ()
}

// ScoreIncrease

function scoreIncrease() {
  for (var i = 0; i < money.length; i++) {
    money[10-questionNumber].classList.add("currentScore");
  }
}

// Check Loss

function lossCheck() {
  alert("You lose. Press okay to restart game.")
  questionNumber = 0
  showQuestions (questions)
  for (var i = 0; i < money.length; i++) {
    money[i].classList.remove("currentScore");
  }
  for (var i = 0; i < questionBlock.length; i++) {
    questionBlock.innerHTML = "YOU LOSE"
  }
}

// Check Win

function winCheck() {
  if (questionNumber == 9) {
    alert("You win")
  }}

// Reset Game

for (var i = 0; i < reset.length; i++) {
  reset[i].addEventListener("click", restartGame)
}

function restartGame() {
  questionNumber = 0
  showQuestions (questionArray)
  for (var i = 0; i < money.length-1; i++) {
    money[i].classList.remove("currentScore");
  }
}

});
