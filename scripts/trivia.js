const quizData = [
    {
        question: "Which fruit is known for being high in vitamin C?",
        answers: ["Apple", "Banana", "Orange", "Grapes"],
        correct: "Orange"
    },
    {
        question: "What is the main fruit used in a classic fruit platter?",
        answers: ["Pineapple", "Strawberries", "Watermelon", "All of the above"],
        correct: "All of the above"
    },
    {
        question: "Which fruit is often used for decoration due to its vibrant color?",
        answers: ["Kiwi", "Blueberries", "Strawberries", "Banana"],
        correct: "Strawberries"
    },
    {
        question: "Which fruit is commonly paired with cheese on a tray?",
        answers: ["Grapes", "Mango", "Pineapple", "Watermelon"],
        correct: "Grapes"
    },
    {
        question: "What is a key factor when designing a fruit platter?",
        answers: ["Color", "Texture", "Arrangement", "All of the above"],
        correct: "All of the above"
    }
];

let currentQuestion = 0;
let mark =0;

const  loadQuestion= ()=> {
    const q = quizData[currentQuestion];
    document.getElementById("question").innerText = q.question;
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach((btn, index) => {
        btn.innerText = q.answers[index];
        btn.disabled = false;
        btn.style.backgroundColor = "Yellow"; 
    });
}

const checkAnswer = (button) =>{
    const correct = quizData[currentQuestion].correct;
    if (button.innerText === correct) {
        button.style.backgroundColor = "green";
        mark+=20;
    } else {
        button.style.backgroundColor = "red";
    }
    const buttons = document.querySelectorAll(".answers button");
    buttons.forEach(btn => btn.disabled = true);
}

const nextQuestion = ()=> {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz").innerHTML = `<h2>You've completed the quiz! <br> Thank you for participating! <br>Your mark is ${mark}%</h2>`;
    }
}

loadQuestion()

// טען את השאלה הראשונה בהתחלה
