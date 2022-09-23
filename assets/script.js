var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
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
console.log(questionsLists[0].question);
console.log(JSON.stringify(questionsLists[0].Answers));

// Starting Quiz Function
function showQuestions(event) {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion();

}

// Display Next
function nextQuestion() {
    answerBtns.innerHTML = '';
    questionEl.innerHTML =questionsLists[currentQuestion].question;
    questionsLists[currentQuestion].Answers.forEach(element => {
        const button = document.createElement('button');
        button.innerText = element;
        answerBtns.append(button);
    });

    currentQuestion++;
}

startButton.addEventListener("click", showQuestions);