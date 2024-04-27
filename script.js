
var questions = [
    {
        question: "Which city is known as the 'Pink City' of India?",
        options: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
        answer: "Jaipur"
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Lal Bahadur Shastri"],
        answer: "Jawaharlal Nehru"
    },
    {
        question: "What is the national currency of India?",
        options: ["Rupee", "Taka", "Riyal", "Peso"],
        answer: "Rupee"
    },
    {
        question: "Which river is known as the 'Ganga of the South'?",
        options: ["Yamuna", "Godavari", "Kaveri", "Krishna"],
        answer: "Kaveri"
    },
    {
        question: "Where is the Indian Space Research Organization (ISRO) headquartered?",
        options: ["Mumbai", "Bengaluru", "Hyderabad", "New Delhi"],
        answer: "Bengaluru"
    }
];

var currentQuestionIndex = 0;
var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');

function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(function(option, index) {
        var optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.setAttribute("onclick", "checkAnswer('" + option + "')");
        optionsElement.appendChild(optionButton);
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function checkAnswer(selectedOption) {
    var correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Incorrect! The correct answer is: " + correctAnswer);
    }
}

displayQuestion(); 
