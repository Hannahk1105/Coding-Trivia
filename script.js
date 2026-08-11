function setAnswers(answers) {
   document.getElementById("answers").innerHTML = ``;

   for (let i = 0; i < answers.length; i++) {
     document.getElementById("answers").innerHTML += `
	    <button onclick="checkAnswer('${answers[i]}')">
	    ${answers[i]} 
    </button>
    `;
}
} 

function setMessage(message) {
    document.getElementById("message").textContent = message;
}

function startGame() { 
    document.getElementById("title").style.display = "none";
    document.getElementById("subtitle").style.display = "none";
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("question").textContent = questions[0].question;

setAnswers(questions[currentQuestion].answers);
}


function checkAnswer(answer) {
if (answer === questions[currentQuestion].correct) {
    score++;
    setMessage("Correct!");
} else {
    setMessage("incorrect");
}
document.getElementById("score").textCentent = "score: " + score;

// Move to next question
currentQuestion++;
if (currentQuestion < questions.length) {
   document.getElementById("question").textcontent =
   questions[currentQuestion].question;
   
   setAnswers(questions[currentQuestion].answers);
} else {
    setMessage("Game Over! Final score: " + score);
}
}

let currentQuestion = 0;
let score = 0;

function checkAnswer(answer) {
    if (answer === questions[currentQuestion].correct) {
        score++;
        document.getElementById("message").textContent = "Correct!";
    } else {
        document.getElementById("message").textContent = "Incorrect!";
    }
    document.getElementById("score").textContent = "Score: " + score;

// Move to next question
currentQuestion++;
if (currentQuestion < questions.length) {
    document.getElementById("question").textContent =
    questions[currentQuestion].question;

setAnswers(questions[currentQuestion].answers);
   
} else {
    document.getElementById("message").textContent =
    "Game Over! Final score: " + score;
}
    }

const questions = [
    {
        question: "What language is used to style web pages?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        correct: "CSS"
    },

 {
        question: "What does HTML stand  for?",
        answers: [
            "High text markup language",
            "Home tool markup language",
             "Hyper text markup language",
            "Hyper transfer markup language"

            ],
            correct: "Hyper text markup language"
        },
    {
        question: "What does CSS stand for?",
        answers: [
            "Computer style sheets",
            "Creative style sheets",
            "Cascading Style Sheets",
            "Coding style syntax"

        ],
        correct: "Cascading Style Sheets"
    },
    {
        question: "Which programming language is used to make web pages interactive?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: "JavaScript"
    },
{
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
        "link",
        "url",
        "a",
        "href"
    ],
    correct: "a"
},
{
    question: "Which Javascript keyword is used to create a variable?",
    answers: [
        "Create",
        "variable",
        "Define",
        "let"
    ],
    correct: "let"
},
{
    question: "What does IDE stand for?",
    answers: [
        "Integrated Development Environment",
        "Internal Development Environment",
        "Integrated Design Environment",
        "Internal Design Environment"  
    ],
    correct: "Integrated Development Environment"
},
{
    question: "What does API stand for?",
    answers: [
        "Automated programming interface",
        "Application programming interface",
        "Application process identifier",
        "Advanced programming instructions"
    ],
    correct: "Application programming interface"
},
{
    question: "What is debugging?",
    answers: [
        "Creating a new website",
        "Designing a user interface",
        "Finding and fixing errors in code",
        "Writing new code"
    ],
    correct: "Finding and fixing errors in code"
},
{
    question: "Which Javascript funtion displays a popup message?",
    answers: [
        "Message",
        "Alert",
        "Popup",
        "Show"
    ],
    correct: "Alert"
},
];
