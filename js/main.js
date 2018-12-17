document.addEventListener("DOMContentLoaded", function() {

// Questions

var questions = [
  {
    question: "Which city hosted the Olympic games in 1992?",
    answers: ["Paris", "Barcelona", "Berlin", "Rome"],
    correctAnswer: "Barcelona"
  },

  {
    question: "Who directed the 1990 film Miller's Crossing?",
    answers: ["Steven Spielberg", "Quentin Tarantino", "The Coen Brothers", "James Cameron"],
    correctAnswer: "The Coen Brothers"
  },
  {
    question: "What year did the American Civil War start?",
    answers: ["1851","1861","1871","1881"],
    correctAnswer: "1861"
  },
  {
    question: "What is the capital city of Nicaragua?",
    answers: ["Managua", "Leon", "San Jose", "San Salvador"],
    correctAnswer: "Managua"
  },
  {
    question: "What was named the world's ugliest animal by the Ugly Animal Preservation Society in 2013?",
    answers: ["Kakapo", "Your Mum", "Probiscis Monkey", "Blobfish"],
    correctAnswer: "Blobfish"
  },
  {
    question: "Who won the 1974 Fifa World Cup?",
    answers: ["West Germany", "Brazil", "Uruguay", "Italy"],
    correctAnswer: "West Germany"
  },
  {
    question: "Who released the 1998 album Aquemini?",
    answers: ["The Notorious BIG", "Tupac", "Outkast", "Nas"],
    correctAnswer: "Outkast"
  },
  {
    question: "The correct answer is D?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "D"
  },
  {
    question: "The correct answer is B?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "B"
  },
  {
    question: "The correct answer is A?",
    answers: ["A", "B", "C", "D"],
    correctAnswer: "A"
  },
  {
    question: "YOU WIN",
    answers: ["","","",""]
  }
]

// Show Questions and Answers

var questionNumber = 0;
var loss = "";
var answerBlock = document.getElementsByClassName("answer");

function showQuestions () {
  var questionBlock = document.getElementsByClassName("question");
    for (var i = 0; i < questionBlock.length; i++) {
      questionBlock[0].innerHTML = questions[questionNumber].question;
    }
    for (var i = 0; i < answerBlock.length; i++) {
        answerBlock[i].innerHTML = questions[questionNumber].answers[i];
    }
  }
showQuestions (questions);


// Check if Correct

for (var i = 0; i < answerBlock.length; i++) {
  answerBlock[i].addEventListener("click", answerClick)
}

function answerClick() {
  if (this.innerHTML == questions[questionNumber].correctAnswer) {
    questionNumber = questionNumber + 1;
    showQuestions (questions)
    alert("Correct")
  }
  else {
    lossCheck()
  }
  console.log(loss)
  var money = document.getElementsByClassName("money");
  console.log(money)
  for (var i = 0; i < money.length; i++) {
      money[10-questionNumber].classList.add("currentScore");
  }
}

// ScoreIncrease



// Check Loss

function lossCheck() {
    alert("You lose")
    questionNumber = 0
    showQuestions (questions)
  }



});
