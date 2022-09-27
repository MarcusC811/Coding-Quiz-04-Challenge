var startButton = document.getElementById("startButton");
var correctAnswers = localStorage.getItem("rightAnswer");
var quizSection = document.getElementById("quiz-ele");
var questionContainer = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerBtns = document.getElementById("answer-buttons");
var nextBtn = document.getElementById("nextButton");
var testBtn = document.getElementsByClassName("new-answer-btn");
var timerText = document.getElementById("timer");
var timerEl = document.getElementById("timer-div");
var resultEl = document.getElementById("results");
var resultP = document.getElementById('resultText');
var submitResults = document.getElementById('resultSubBtn');
var username = document.getElementById('fname');
var currentQuestion = 0;
var lastWin = 0;
var timeLeft = 75;
var highScore = JSON.parse(localStorage.getItem('highscores')) || [];
var questionsLists = [
    {
        question: '1. Which HTML element do you use when linking a script?',
        Answers: [
        '<script>',
        '<js>', 
        '<scripting>',
        '<div>' ],
        correctAnswer: '<script>'
    
    },

    {
        question: '2. Where do you link a JavaScript script in your HTML?',
        Answers: [
        '<head> section',
        '<body> section', 
        'Either is fine' ],
        correctAnswer: '<body> section'
    
    },

    {
        question: '3. What does HTML stand for?',
        Answers: [
        'Hyper Text Mark Up Language',
        'Home Tool MarkUp Language', 
        'Hyperlink and Text Markup Language'],
        correctAnswer: 'Hyper Text Mark Up Language'
    
    },

    {
        question: '4. What would be the largest header on the page?',
        Answers: [
        '<h6>',
        '<p>', 
        '<h1>',
        '<a>' ],
        correctAnswer: '<h1>'
    
    },

    {
        question: '5. Which would be used in HTML to format a linebreak?',
        Answers: [
        '<a>',
        '<p>', 
        '<br>',
        '<break>' ],
        correctAnswer: '<br>'
    
    },

    {
        question: '6. What does CSS stand for?',
        Answers: [
        'Cascade Style Sheet',
        'Cascading Style Sheet', 
        'Computer Style Sheet',
        'Colorful Style Sheet' ],
        correctAnswer: 'Cascading Style Sheet'
    
    },

    {
        question: '7. Correct Syntax for linking a CSS file?',
        Answers: [
        '<link rel="stylesheet" href="/assets/style.css>',
        '<link rel="stylesheet" src="/assets/style.css>' ],
        correctAnswer: '<link rel="stylesheet" href="/assets/style.css>'
    
    },

    {
        question: '8. What section of the HTML should the CSS file be linked?',
        Answers: [
        'The head section',
        'The body section', 
        'End of document' ],
        correctAnswer: 'The head section'
    
    },

    {
        question: '9. What HTML tag should be used for inline CSS?',
        Answers: [
        '<link>',
        '<style>', 
        '<css>',
        '<color>' ],
        correctAnswer: '<style>'
    
    },

    {
        question: '10. Commenting in CSS is done how?',
        Answers: [
        '// Comment',
        '/* Comment */', 
        '!-- Comment',
        '"Comment"' ],
        correctAnswer: '/* Comment */'
    
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
    scoreBoard();
}

// Display Next  Question
function nextQuestion() {
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
        lastWin++;
        currentQuestion++;
        nextQuestion();
    } else {
        alert('Wrong Answer');
        timeLeft-=10;
    }

    if(currentQuestion >= questionsLists.length - 1) {
        testShowResults();
    } else if(timeLeft === 0) {
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
        timeLeft = 0;
        quizSection.classList.remove('container');
        quizSection.classList.add('hide');
        resultEl.classList.remove('hide');
        questionContainer.classList.add('hide');

        resultP.innerText = "Nice job! Your score is " + lastWin + "/10"; 
    timerEl.classList.add('hide');
    scoreBoard(lastWin);
}
console.log(lastWin);
// Function for rendering scoreboard
function saveScore () {
    var inputName = username.value;
    if(!inputName) {
        alert("Please enter your name")
    } else {
        
    }
}

startButton.addEventListener("click", startQuiz);
submitResults.addEventListener("click", saveScore);