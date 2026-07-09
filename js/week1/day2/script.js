// ============================================================
// DAY 1 & 2 CONCEPTS USED:
// Variables, Data Types, Arrays, Objects, Operators,
// Comparisons, Logical Operators, if/else, Ternary,
// Loops (for, forEach), String Methods, Booleans
// ============================================================

// ============================================================
// QUESTION DATA (Arrays & Objects)
// ============================================================
const questions = [
    {
        question: "What is the correct syntax for assigning a value to a variable?",
        options: ["x : 5", "x = 5", "x == 5", "x -> 5"],
        correct: 1,
        explanation: "The assignment operator is '='."
    },
    {
        question: "What will `let x = 5; let y = '8'; let z = x + y;` return?",
        options: ["undefined", "58", "13", "Error"],
        correct: 1,
        explanation: "Adding a number and string concatenates them."
    },
    {
        question: "What is the result of `5 % 2`?",
        options: ["2", "2.5", "1", "0"],
        correct: 2,
        explanation: "The modulus operator returns the remainder."
    },
    {
        question: "What does the `++` operator do?",
        options: ["Adds 2", "Increments by 1", "Multiplies by 2", "Decrements by 1"],
        correct: 1,
        explanation: "++ increments a number by 1."
    },
    {
        question: "What is the correct way to write an `if` statement?",
        options: ["if (x == 5) { }", "if x == 5 { }", "if (x == 5) :", "if x = 5 then"],
        correct: 0,
        explanation: "The syntax is: if (condition) { }"
    },
    {
        question: "Which operator checks for equal value AND equal type?",
        options: ["==", "=", "===", "!=="],
        correct: 2,
        explanation: "=== checks both value and type."
    },
    {
        question: "What will `Boolean(0)` return?",
        options: ["true", "false", "undefined", "null"],
        correct: 1,
        explanation: "0 is a falsy value."
    },
    {
        question: "Which string method extracts a part of a string?",
        options: ["slice()", "split()", "trim()", "replace()"],
        correct: 0,
        explanation: "slice() extracts a portion of a string."
    },
    {
        question: "What is the result of `'Hello' + ' ' + 'World'`?",
        options: ["HelloWorld", "Hello World", "Hello+World", "Error"],
        correct: 1,
        explanation: "The + operator concatenates strings."
    },
    {
        question: "Which loop runs at least once even if the condition is false?",
        options: ["for", "while", "do-while", "forEach"],
        correct: 2,
        explanation: "do-while executes the code block once before checking the condition."
    }
];

// ============================================================
// VARIABLES (let, const)
// ============================================================
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let isAnswered = false;
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('startScreen');
const questionScreen = document.getElementById('questionScreen');
const resultsScreen = document.getElementById('resultsScreen');

const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const nextBtn = document.getElementById('nextBtn');

const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const questionCounter = document.getElementById('questionCounter');
const progressFill = document.getElementById('progressFill');
const scoreDisplay = document.getElementById('scoreDisplay');
const totalQuestions = document.getElementById('totalQuestions');
const finalScore = document.getElementById('finalScore');
const finalTotal = document.getElementById('finalTotal');
const resultMessage = document.getElementById('resultMessage');
const resultDetails = document.getElementById('resultDetails');

// ============================================================
// FUNCTIONS (Function declarations)
// ============================================================

// Start Quiz
function startQuiz() {
    // Reset variables using let (mutable)
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    isAnswered = false;

    // Update total questions using string concatenation
    totalQuestions.textContent = questions.length;

    // Show/Hide screens
    startScreen.classList.remove('active');
    questionScreen.classList.add('active');
    resultsScreen.classList.remove('active');

    loadQuestion();
}

// Load Question
function loadQuestion() {
    // Using const for values that shouldn't change
    const question = questions[currentQuestionIndex];
    const total = questions.length;

    // Update question text (using template literals - Day 2)
    questionText.textContent = question.question;

    // Update counter using template literals
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${total}`;

    // Update progress bar using arithmetic
    const progress = ((currentQuestionIndex + 1) / total) * 100;
    progressFill.style.width = progress + '%';

    // Update score display
    scoreDisplay.textContent = score;

    // Clear options and reset state
    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    isAnswered = false;
    nextBtn.disabled = true;

    // Using for loop to display options
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = `${String.fromCharCode(65 + i)}. ${option}`;
        btn.dataset.index = i;

        // Using addEventListener for click events
        btn.addEventListener('click', function() {
            selectOption(i);
        });

        optionsContainer.appendChild(btn);
    }
}

// Select Option (Using comparison and logical operators)
function selectOption(index) {
    // Using if statement to prevent re-selection
    if (isAnswered) return;

    // Using logical AND to check if selection is valid
    if (index < 0 || index >= questions[currentQuestionIndex].options.length) return;

    // FIX 1: Set the selected answer and mark as answered
    selectedAnswer = index;
    isAnswered = true;

    // Get all option buttons and current question
    const optionBtns = optionsContainer.querySelectorAll('.option-btn');
    const question = questions[currentQuestionIndex];

    // FIX 2: Using for loop to properly mark selected option
    for (let i = 0; i < optionBtns.length; i++) {
        const btn = optionBtns[i];
        btn.disabled = true;

        // Remove any existing classes first (cleanup)
        btn.classList.remove('selected', 'correct', 'wrong');

        // Using comparison operators
        const isCorrect = (i === question.correct);
        const isSelected = (i === selectedAnswer);

        // FIX 3: Apply classes properly
        if (isSelected) {
            btn.classList.add('selected');
        }

        // Using if/else for correctness styling
        if (isCorrect) {
            btn.classList.add('correct');
        } else if (isSelected && !isCorrect) {
            btn.classList.add('wrong');
        }
    }

    // Update score using if/else and increment operator
    const isCorrect = (selectedAnswer === question.correct);
    if (isCorrect) {
        score++;
        scoreDisplay.textContent = score;
    }

    // Store user answer using array push (Day 2)
    userAnswers.push({
        selected: selectedAnswer,
        correct: question.correct,
        isCorrect: isCorrect
    });

    // FIX 4: Enable next button - THIS IS THE CRITICAL FIX
    nextBtn.disabled = false;
}

// Next Question or Show Results
function goToNext() {
    // Using if/else to check if there are more questions
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showResults();
    }
}

// Show Results
function showResults() {
    // Show/Hide screens
    questionScreen.classList.remove('active');
    resultsScreen.classList.add('active');

    // Display final score
    finalScore.textContent = score;
    finalTotal.textContent = questions.length;

    // Using comparison operators to determine message
    const percentage = (score / questions.length) * 100;

    // Using if/else if/else for grading
    let message = '';
    if (percentage === 100) {
        message = '🌟 Perfect Score! You\'re a JavaScript Master!';
    } else if (percentage >= 80) {
        message = '🎉 Excellent! You really know your JavaScript!';
    } else if (percentage >= 60) {
        message = '👍 Good job! Keep practicing to improve!';
    } else if (percentage >= 40) {
        message = '📚 Not bad! Review the topics you missed.';
    } else {
        message = '💪 Keep learning! Review the lessons and try again.';
    }
    resultMessage.textContent = message;

    // Build results details using string concatenation and loops
    let detailsHTML = '';
    // Using for loop with string methods (slice, toUpperCase)
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const answer = userAnswers[i];
        const isCorrect = answer ? answer.isCorrect : false;
        const selectedIdx = answer ? answer.selected : -1;

        // Using ternary operator for icon
        const icon = isCorrect ? '✅' : '❌';
        const statusClass = isCorrect ? 'correct-mark' : 'wrong-mark';

        // Using slice() to preview question and toUpperCase()
        const preview = q.question.length > 50 ?
            q.question.slice(0, 50) + '...' :
            q.question;

        // Using string concatenation with +=
        detailsHTML += `
            <div class="detail-item">
                <span>${icon} ${preview}</span>
                <span class="${statusClass}">
                    ${isCorrect ? 'Correct' : `Wrong (Answer: ${String.fromCharCode(65 + q.correct)})`}
                </span>
            </div>
        `;
    }
    resultDetails.innerHTML = detailsHTML;
}

// Restart Quiz
function restartQuiz() {
    // Reset all variables
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    isAnswered = false;

    // Show/Hide screens
    resultsScreen.classList.remove('active');
    startScreen.classList.add('active');

    // Reset score display
    scoreDisplay.textContent = '0';
}

// ============================================================
// EVENT LISTENERS
// ============================================================
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', goToNext);
restartBtn.addEventListener('click', restartQuiz);

// ============================================================
// KEYBOARD NAVIGATION (using logical operators)
// ============================================================
document.addEventListener('keydown', function(e) {
    // Using logical OR to check multiple keys
    if (e.key === 'Enter' || e.key === ' ') {
        // Using logical AND to check state
        if (!nextBtn.disabled && questionScreen.classList.contains('active')) {
            e.preventDefault();
            goToNext();
        }
        // Using logical AND with start button
        if (startScreen.classList.contains('active') && e.key === 'Enter') {
            e.preventDefault();
            startQuiz();
        }
    }

    // Number key shortcuts for options (1-4)
    const num = parseInt(e.key);
    // Using logical AND with comparison
    if (!isAnswered && num >= 1 && num <= 4 && questionScreen.classList.contains('active')) {
        selectOption(num - 1);
    }
});

// ============================================================
// CONSOLE WELCOME (using template literals - Day 2)
// ============================================================
console.log('📚 Welcome to the JavaScript Quiz App!');
console.log('🎯 This project uses concepts from Day 1 & 2:');
console.log('   • Variables (let, const)');
console.log('   • Data Types (String, Number, Boolean, Array, Object)');
console.log('   • Operators (Arithmetic, Assignment, Comparison, Logical)');
console.log('   • Conditionals (if/else, ternary)');
console.log('   • Loops (for, forEach)');
console.log('   • String Methods (slice, toUpperCase, split, trim)');
console.log('   • Functions & Events');
console.log('   • DOM Manipulation');
console.log('🚀 Good luck!');