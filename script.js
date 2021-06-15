"use strict";

// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

const guess = Number(document.querySelector(".guess").value);
let RandomNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  RandomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".score").style.color = "white";
  document.querySelector(".score").textContent = score;
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess == RandomNumber && score > 1) {
    document.querySelector(".message").textContent = "Your guess is right!";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".score").style.color = "black";
    document.querySelector(".number").textContent = RandomNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
      document.querySelector(".highscore").style.fontWeight = "bold";
    }
  } else if (guess !== RandomNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
      if (guess < RandomNumber) {
        document.querySelector(".message").textContent = "Number is too low";
      } else {
        document.querySelector(".message").textContent = "Number is too high";
      }
    } else {
      document.querySelector(".message").textContent = "YOU LOST!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (!guess) {
    document.querySelector(".message").textContent = "No Number!";
  }
});
