"use-strict";

// Doucmentation Ref
let secretNumber = Math.trunc(Math.random() * 20 + 1);
const check = document.querySelector(".check");
document.querySelector(".message").textContent;
document.querySelector(".score").textContent;
document.querySelector(".highscore").textContent;

// The Begainning Of The App

let score = 20;
let highScore = 0;
const dispMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// The Functionality Of Check App
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // IF There Is No Number
  if (!guess) {
    dispMessage("⛔ No Number");

    // When The User Is Correct
  } else if (guess === secretNumber) {
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").textContent = secretNumber;
    dispMessage("🎉 Correct Number");

    // Style Change In Case Of Correct Number
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // refactoring the code
  } else if (guess !== secretNumber) {
    dispMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
    score--;
    document.querySelector(".score").textContent = score;
  }
});

// The Functionality Of Again btn

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  dispMessage("🤔 Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";

  // style
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
