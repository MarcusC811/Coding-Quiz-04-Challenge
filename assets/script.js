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
    questionEl.innerHTML =questionsLists[0].question;
    questionsLists[0].Answers.forEach(element => {
        const button = document.createElement('button');
        button.innerText = element.text;
    });
}

startButton.addEventListener("click", showQuestions);

// questionsLists[0].Answers.forEach(Answers => {
//     const button = document.createElement('button');
//     button.innerText = answers.text;
// }) [0].Answers