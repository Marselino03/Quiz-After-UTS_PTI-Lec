let questions = [
  {
    ques: "1. Siapa yang yang dijuluki sebagai Bapak Internet?",
    options: ["Bill Gates", "Linus Trovald", "Tim Berners-Lee", "Steve Job"],
    correctIndex: 2
  },
  {
    ques: "2. Apa singkatan HTML?",
    options: [
      "HyperText Markup Languange",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Markup Language"
    ],
    correctIndex: 0
  },
  {
    ques: "3. Siapa yang menciptakan standarisasi Web?",
    options: [
      "Google",
      "The World Wide Web Consortium",
      "Microsoft",
      "Mozilla"
    ],
    correctIndex: 1
  },
  {
    ques: "4. Apa singkatan CSS?",
    options: [
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ],
    correctIndex: 1
  },
  {
    ques:
      "5. Cara membuat tampilan website menjadi lebih dinamis dapat menggunakan...",
    options: ["HTML", "CSS", "SQL", "JavaScript"],
    correctIndex: 3
  }
];
let index = 0;
let score = 0;
const nextQues = () => {
  if (index > questions.length - 1) {
    gameOver();
    return;
  } else {
    let question = document.getElementById("question");
    question.innerText = questions[index].ques;
    for (let i = 0; i < 4; i++) {
      let option = document.getElementById("option-" + (i + 1));
      option.innerText = questions[index].options[i];
      option.className = "blue-bg";
      if (questions[index].correctIndex === i) {
        option.onclick = (e) => {
          e.target.className = "right";
          score++;
          e.target.onclick = null;
        };
      } else {
        option.onclick = (e) => {
          e.target.classList.remove("blue-bg");
        };
      }
    }
    index++;
    setTimeout(nextQues, 5000);
  }
};
nextQues();
function gameOver() {
  document.getElementById("gameOver").classList.remove("hidden");
  document.querySelector(".timer").style.animation = "none";
  document.querySelector(".timer").style["background-color"] = "gray";
  document.getElementById("final-score").innerText = score;
}
