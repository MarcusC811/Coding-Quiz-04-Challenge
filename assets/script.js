var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");

var questionsLists = [
    {
        question: 'What 9 + 10?',
        Answers: {
        A: '21',
        B: '11', 
        C: '14',
        D: '19' 
        },
    correctAnswer: 'D'
    
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
console.log(questionsLists.question);

// Starting Quiz Function
function showQuestions(event) {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion();

}

// Display Next
function nextQuestion() {
    questionEl.innerHTML ='<h2>' + questionsLists.question + '</h2>';
}

startButton.addEventListener("click", showQuestions);