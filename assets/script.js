var startButton = document.getElementById('start-btn');
var quizContainer = document.getElementById('questions');
var endContainer = document.getElementById('end-container');
var questionElement = document.getElementById('question-title');
var answerButtons = document.getElementById('choices');
var timerElement = document.getElementById('time');
var finalScoreElement = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var saveButton = document.getElementById('save-btn');
var startPage = document.getElementById("start-screen");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;

const questions = [

    {
        question: "Commonly used data types do not include ____________.",
        answers: [
            { text: "String's", correct: false },
            { text: "Number's", correct: false },
            { text: "Booleans", correct: false },
            { text: "Alerts", correct: true },
        ]
    },

    {
        question: "The condition in an if/ else statement enclosed with ____________.",
        answers: [
            { text: "Quotes", correct: false },
            { text: "Cruly brackets", correct: false },
            { text: "Parenthesis", correct: true },
            { text: "Square brackets", correct: false },
        ]
    },

    {
        question: "Arrays in JavaScript can be stored____________.",
        answers: [
            { text: "Numbers and strings", correct: false },
            { text: "Other string", correct: false },
            { text: "Booleans", correct: false },
            { text: "All of the above", correct: true },
        ]
    },

    {
        question: "String values must be enclosed within ____________  when being assigned to a variable.",
        answers: [
            { text: "Coma", correct: false},
            { text: "Cruly brackets", correct: false },
            { text: "Parenthesis", correct: false },
            { text: "Quotes", correct:  true },
        ]
    },

    {
        question: "Very useful tool used during development and debugging for printing content to the debugger is ____________ .",
        answers: [
            { text: "JavaScript", correct: false},
            { text: "Forloops", correct: false },
            { text: "Terminal/bash", correct: false },
            { text: "console.log", correct: true  },
        ]
    },


];
console.log(startButton)

startButton.addEventListener('click', startQuiz);
saveButton.addEventListener('click', saveScore);

function startQuiz() {
    startPage.style.display = 'none';
    quizContainer.classList.remove("hide")
    setNextQuestion();
    startTimer();
}

function setNextQuestion() {
    resetState();
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        endQuiz();
    }
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}



function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        var message = document.getElementById("correct")
        message.textContent = "correct"
        score++;
    } else {
        var message = document.getElementById("correct")
        message.textContent = "incorrect"

        timeLeft -= 10; // Subtract 10 seconds for incorrect answer
    }
    currentQuestionIndex++;
    setNextQuestion();
}

function startTimer() {
    const timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timerElement.innerText = timeLeft;
            timeLeft--;
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    quizContainer.style.display = 'none';
    endContainer.style.display = 'block';
    finalScoreElement.innerText = score;
}

function saveScore() {
   

    const initials = initialsInput.value.trim();
    if (initials !== '') {
        // Implement your logic to save the score with initials
        alert(`Score saved for ${initials}: ${score}`);
    } else {
        alert('Please enter your initials.');
    }
}