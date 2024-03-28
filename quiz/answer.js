const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who is the author of 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "Mark Twain", "Charles Dickens", "Jane Austen"],
        answer: "Harper Lee"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    let quizContent = '';

    quizData.forEach((data, index) => {
        quizContent += `<div class="question">${index + 1}. ${data.question}</div>`;
        data.options.forEach(option => {
            quizContent += `<input type="radio" name="question${index}" value="${option}"> ${option}<br>`;
        });
    });

    quizContainer.innerHTML = quizContent;
}

function submitQuiz() {
    const resultContainer = document.getElementById('result');
    let score = 0;

    quizData.forEach((data, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            if (selectedOption.value === data.answer) {
                score++;
            }
        }
    });

    resultContainer.innerHTML = `Your score: ${score} out of ${quizData.length}`;
}

loadQuiz();