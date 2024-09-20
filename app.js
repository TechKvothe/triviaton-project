import { questions } from "./questions.js";

const letters = ["A", "B", "C", "D", "E"];
let num = [];
let x;
var wrong = new Audio('songs/wrong.mp3');
var correct = new Audio('songs/correct.mp3');
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const popUp = document.getElementById("popUp");
const popUpContainer = document.getElementById("popUpContainer");

// Toggle popup from hidden to show or vice versa
function showPopUp() {
  popUpContainer.classList.toggle("show");
  popUp.classList.toggle("show");
}

// Get a non-repeating random number
const getRandomNumberWithoutRepetition = (min, max) => {
  x = Math.floor(Math.random() * (max - min) + min);
  while (num.includes(x)) {
    x = Math.floor(Math.random() * (max - min) + min);
  }
  return x;
}

let index = getRandomNumberWithoutRepetition(0, (questions.length-1));


function handleQuestion(index) {
  questionContainer.innerHTML = `<p>${questions[index].question}</p>`;

  // answers
  answerContainer.innerHTML = "";

  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<div><button><p class = "button">${letters[questions[index].possibleAnswers.indexOf(answer)]}</p><p>${answer}</p></button></div>`;
  });

  let answers = document.querySelectorAll("button");

  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      console.log(e.target.textContent.substring(1));
      num.push(index);
      if (e.target.textContent.substring(1) === questions[index].correctAnswer) {
        popUp.innerHTML = `¡Correcto!`;
        popUp.style.color = "green";
        correct.play();
        showPopUp();
      } else {
        popUp.innerHTML = `¡Incorrecto!`;
        popUp.style.color = "red";
        wrong.play();
        showPopUp();
      }
    });
  });
}

popUpContainer.addEventListener("click", (e) => {
  if (num.length === (questions.length - 1)) {
    popUp.innerHTML = `¡Gracias por participar!`;
    popUp.style.color = "pink";
  } else {
    showPopUp();
    handleQuestion(getRandomNumberWithoutRepetition(0, (questions.length-1)));
  } 
});

handleQuestion(index);
