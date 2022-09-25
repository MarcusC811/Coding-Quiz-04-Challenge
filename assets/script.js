var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var quizSection = document.getElementById("quiz-ele");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("nextButton");
var testBtn = document.getElementsByClassName("new-answer-btn");
var timerText = document.getElementById("timer");
var scoreText = document.getElementById("score");
var resultEl = document.getElementById("results");
var resultP = document.getElementById('resultText');
var submitResults = document.getElementById('resultSubBtn');
var currentQuestion = 0;
var wins = 0;

var questionsLists = [
    {
        question: 'What 9 + 10?',
        Answers: [
        '21',
        '11', 
        '14',
        '19' ],
    correctAnswer: '19'
    
    },

    {
        question: 'Is Galaxia the GOAT?',
        Answers: [
        'yes',
        'yes', 
        'yes',
        'yes' ],
    correctAnswer: 'yes'
    
    },

    {
        question: 'Is my wife the baddest :hotface:?',
        Answers: [
        'yes',
        'yes', 
        'yes',
        'yes' ],
    correctAnswer: 'yes'
    
    },

    {
        question: 'Do I have the best wife in the world?',
        Answers: [
        'yes',
        'yes', 
        'yes',
        'yes' ],
    correctAnswer: 'yes'
    
    },

    {
        question: '',
        Answers: [
        '',
        '', 
        '',
        '' ],
    correctAnswer: ''
    
    }
];

console.log(wins);
// Starting Quiz Function
function startQuiz(event) {
    setTime();
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    scoreText.innerText = wins;
    nextQuestion();
}

// Display Next
function nextQuestion() {
    nextBtn.classList.remove("hide");
    answerBtns.innerHTML = '';
    questionEl.innerHTML =questionsLists[currentQuestion].question;
    questionsLists[currentQuestion].Answers.forEach(element => {
        const button = document.createElement('button');
        button.innerText = element;
        button.classList.add("new-answer-btn");
        answerBtns.append(button);
        answerBtns.addEventListener("click", answerVerify);
    });

    
    
}

function answerVerify (event) {
    const selectedAnswer = event.target;
    if(selectedAnswer.innerText===questionsLists[currentQuestion].correctAnswer) {
        alert('correct!')
        wins++;
        currentQuestion++;
        nextQuestion();
    } else {
        alert('Wrong Answer');
    }

    showResults();
}

function setTime() {
    var secLeft = 75;
    timerText.innerText = secLeft;
    setInterval(function() {
        secLeft--;
    } , 1000)
}

function showResults() {
    if(currentQuestion >= questionsLists.length - 1) {
        alert("Nice job! Your score is " + wins);
        quizSection.classList.add('hide');
        resultEl.classList.remove('hide');
        resultP.innerText = "Nice job! Your score is " + wins;
    }

    
}

startButton.addEventListener("click", startQuiz);