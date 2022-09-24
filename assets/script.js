var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("nextButton");
var currentQuestion = 0;

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
        question: 'What 9 + 10?',
        Answers: {
        A: '21',
        B: '11', 
        C: '14',
        D: '19' 
        },
    correctAnswer: 'D'
    
    }
];
console.log(questionsLists);
console.log(questionsLists[0].correctAnswer);

// Starting Quiz Function
function startQuiz(event) {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
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
    });

    
}

function answerVerify (event) {
    const selectedAnswer = event.target;
    if(selectedAnswer===questionsLists[currentQuestion].correctAnswer) {
        currentQuestion++;
    } else {
        alert('Wrong Answer')
    }
}

startButton.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
