const questionData = [
  {
    question: "What is the capital of France?",
    A: "Madrid",
    B: "Berlin",
    C: "London",
    D: "Paris",
    correct: "Paris",
  },
  {
    question: 'Which planet is known as the "Red Planet"?',

    A: "Venus",
    B: "Mars",
    C: "Jupiter",
    D: "Saturn",
    correct: "Mars",
  },
  {
    question: 'Who is the author of "To Kill a Mockingbird"?',

    A: " Charles Dickens",
    B: "Harper Lee",
    C: "Jane Austen",
    D: "F. Scott Fitzgerald",
    correct: "Harper Lee",
  },
  {
    question: "What is the largest mammal in the world?",

    A: "African Elephant",
    B: "Blue Whale",
    C: "Giraffe",
    D: "Polar Bear",
    correct: "Blue Whale",
  },
  {
    question: "What is the chemical symbol for gold?",

    A: "Go",
    B: "Gl",
    C: "Gd",
    D: "Au",
    correct: "Au",
  },
];

let currentQuestion = document.getElementById("js-question");
let a_answer = document.getElementById("a_answer");
let b_answer = document.getElementById("b_answer");
let c_answer = document.getElementById("c_answer");
let d_answer = document.getElementById("d_answer");
let correct_ans = document.getElementById("correct_ans");
let submitBtn = document.getElementById("submit-btn");
let numbering = document.getElementById("numbering");

let currentQuestionCount = 0;

loadQuestion();

function loadQuestion() {
  numbering.innerText = `(${currentQuestionCount + 1})`;
  const currentQuizData = questionData[currentQuestionCount];
  currentQuestion.innerText = currentQuizData.question;
  a_answer.innerHTML = currentQuizData.A;
  b_answer.innerHTML = currentQuizData.B;
  c_answer.innerHTML = currentQuizData.C;
  d_answer.innerHTML = currentQuizData.D;
  correct_ans.innerHTML = "";
}

submitBtn.addEventListener("click", () => {
  // currentQuestionCount < 4
  //   ? currentQuestionCount++
  //   : (currentQuestionCount = 0);
  correct_ans.innerHTML = `${questionData[currentQuestionCount].correct} is correct!`;
  currentQuestionCount = (currentQuestionCount + 1) % questionData.length;
  setTimeout(loadQuestion, 2000);
});
