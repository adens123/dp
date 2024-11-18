const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false }
    ]
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false }
    ]
  }
];

const gameScreen = document.querySelector(".game");
const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const resultScreen = document.querySelector(".result");
const play = document.querySelector(".play");

let qIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let score = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  score = 0;
  showQuestion(qIndex);
};

play.addEventListener("click", () => {
  gameScreen.style.display = "block";
  resultScreen.style.display = "none";
  playAgain();
});

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctAnswers}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongAnswers}`;
  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctAnswers - wrongAnswers) * 10
  }`;
};

const showQuestion = qNumber => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.innerHTML = data[qNumber].question;
  answers.innerHTML = data[qNumber].answers
    .map(
      (item, index) => `<div class="answer">
              <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
              <label for=${index}>${item.answer}</label>
            </div>`
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answers.querySelectorAll("input").forEach(el => {
    el.addEventListener("click", e => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctAnswers++ : wrongAnswers++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Please select an answer!!");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
