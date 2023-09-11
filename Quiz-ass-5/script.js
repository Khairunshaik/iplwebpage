// Fetch quiz data from the API endpoint
async function fetchQuizData() {
    try {
        const response = await fetch('https://5d76bf96515d1a0014085cf9.mockapi.io/quiz');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching quiz data:', error);
    }
}

// Dynamically generate the quiz questions and options
async function loadQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const scoreDisplay = document.getElementById('score');

    const quizData = await fetchQuizData();

    let score = 0;

    quizData.forEach((question, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question-container');

        const questionElement = document.createElement('p');
        questionElement.textContent = `${index + 1}. ${question.question}`;
        questionContainer.appendChild(questionElement);

        question.options.forEach((option, optionIndex) => {
            const optionLabel = document.createElement('label');
            const optionInput = document.createElement('input');
            optionInput.setAttribute('type', 'radio');
            optionInput.setAttribute('name', `question${index}`);
            optionInput.setAttribute('value', optionIndex);

            optionLabel.appendChild(optionInput);
            optionLabel.appendChild(document.createTextNode(option));

            questionContainer.appendChild(optionLabel);
        });

        quizForm.appendChild(questionContainer);

        // Add event listener to check answers
        questionContainer.addEventListener('change', () => {
            const selectedOption = questionContainer.querySelector('input:checked');
            if (selectedOption) {
                const selectedOptionIndex = parseInt(selectedOption.value);
                if (selectedOptionIndex === question.answer) {
                    score++;
                }
            }
        });
    });

    // Add event listener to handle form submission
    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        scoreDisplay.textContent = score;
    });
}

loadQuiz();
