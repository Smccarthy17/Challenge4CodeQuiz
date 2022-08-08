var startButton = document.getElementById('start-btn');
var containerDiv = document.getElementById('container');

var timerDisplay = document.getElementById('timer');
var timeleft = 60;

var questionDiv = document.getElementById('question');
var answersDiv = document.getElementById('answer-btns');

var scoreDisplay = document.getElementById('score-display');

var hiScoreOl = document.getElementById('hiscore-list');
var scoreDiv = document.getElementById('scores');
var restartButton = document.getElementById('restart');
restartButton.addEventListener('click', reloadQuiz);

const questionsArray = [
    {
        question: 'Which is used most for styling webpages?',
        answers: [
            {text: 'HTML', correct: false},
            {text: 'Python', correct: false},
            {text: 'CSS', correct: true},
            {text: 'Java', correct: false},
        ],
    },
    {
        question: 'What does int mean in javaScript?',
        answers: [
            {text: 'An interval', correct: false},
            {text: 'An integer', correct: true},
            {text: 'An interim value', correct: false},
            {text: 'None of the above', correct: false},
        ],
    },
    {
        question:
            'In javaScript what is the correct way to declare a function?',
        answers: [
            {text: 'function functionName() { (function code goes here) }',correct: false,},
            {text: 'var functionName = function() { (function code goes here) }',correct: false,},
            {text: 'Both are correct', correct: true},
            {text: 'Neither are correct', correct: false},
        ],
    },
    {
        question: 'Which choice is not a valid HTML tag?',
        answers: [
            {text: '<tc>', correct: true},
            {text: '<tr>', correct: false},
            {text: '<td>', correct: false},
            {text: '<th>', correct: false},
        ],
    },
    {
        question: 'When creating links which HTML tag is used?',
        answers: [
            {text: '<href>', correct: false},
            {text: '<img>', correct: false},
            {text: '<h3>', correct: false},
            {text: '<a>', correct: true},
        ]
    }
];

var shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startQuiz);

function reloadQuiz() {
    location.reload();
}

function startQuiz() {
    startButton.classList.add("hidden");
    containerDiv.classList.remove("hidden");
    scoreDiv.classList.add("hidden");
    viewScores.classList.remove("hidden");

    shuffledQuestions = questionsArray.sort(() => Math.random() -0.5);
    currentQuestionIndex = 0;
    
    var quizTimer = setInterval(function(){
        if ((timeleft <= 0) && (currentQuestionIndex < 5)) {
            clearInterval(quizTimer);
            endQuiz();
        }
        else if ((timeleft <= 0) || (currentQuestionIndex == 5)) {
            clearInterval(quizTimer);
        }
        
          timerDisplay.innerHTML = timeleft;

        timeleft -= 1;
      }, 1000); 
        
    setNextQuestion();
}