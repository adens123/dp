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
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const resultScreen = document.querySelector(".result");
const play = document.querySelector(".play");

let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let scroe = 0;
let selectedAnswer;

const playAgain = () => {
  qIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  scroe = 0;
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
  ).textContent = `Correct Answers: ${correctCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongCount}`;
  resultScreen.querySelector(".score").textContent = `Score: ${
    (correctCount - wrongCount) * 10
  }`;
};

const showQuestion = qNumber => {
  if (qIndex === data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;

  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, i) => `<div class="answer">
            <input type="radio" name="answer" id=${i} value=${item.isCorrect} />
            <label for=${i}>${item.answer}</label>
          </div>`
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach(item => {
    item.addEventListener("click", e => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer) {
      selectedAnswer === "true" ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Please select an answer");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
