var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var quizSection = document.getElementById("quiz");
var questions = [
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
console.log(typeof questions);

function showQuestions() {
    function generateQuestions(){

    }

    function showResults(){

    }
}

startButton.addEventListener("click", showQuestions);