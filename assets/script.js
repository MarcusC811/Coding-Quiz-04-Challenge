var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var quizSection = document.getElementById("quiz-ele");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("nextButton");
var testBtn = document.getElementsByClassName("new-answer-btn");
var timerText = document.getElementById("timer");
var resultEl = document.getElementById("results");
var resultP = document.getElementById('resultText');
var submitResults = document.getElementById('resultSubBtn');
var currentQuestion = 0;
var wins = 0;
var timeLeft = 75;

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

// Starting Quiz Function
function startQuiz(event) {
    setTime();
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion();
}

// Display Next  Question
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
        timeLeft-=10;
    }

    if(currentQuestion >= questionsLists.length - 1) {
        testShowResults();
    }
}

function setTime() {
    var quizTimer = setInterval(function(){
    if(timeLeft <= 0 && currentQuestion < questionsLists.length - 1){
        alert("Time is up!");
        clearInterval(quizTimer);
        timerText.innerHTML = "Finished";
        testShowResults();
    } else {
        timerText.innerHTML = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
    }, 1000);
}

function testShowResults() {
    if(currentQuestion >= questionsLists.length - 1) {
        timeLeft = 0;
        quizSection.classList.add('hide');
        resultEl.classList.remove('hide');
        resultP.innerText = "Nice job! Your score is " + wins;
    } 
    quizSection.classList.add('hide');
    resultEl.classList.remove('hide');
    resultP.innerText = "Nice job! Your score is " + wins;
    timerText.classList.add('hide');
}

startButton.addEventListener("click", startQuiz);
