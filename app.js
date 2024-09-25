import { questions } from "./questions.js";
import { groups } from "./functions.js"

localStorage.clear();
localStorage.setItem("Group1", 0);
localStorage.setItem("Group2", 0);
localStorage.setItem("Group3", 0);
localStorage.setItem("Group4", 0);

const letters = ["A", "B", "C", "D", "E"];
let num = [];
let nume = [];
let possibleRandom;
var wrong = new Audio('songs/wrong.mp3');
var correct = new Audio('songs/correct.mp3');
const container = document.getElementById("container");
const questionContainer = document.querySelector(".question-container");
const answerContainer = document.getElementById("answerContainer");
const popUp = document.getElementById("popUp");
const pointsContainer = document.getElementById("pointsContainer");
const popUpContainer = document.getElementById("popUpContainer");
const presentation = document.getElementById("presentation");
const presentationButton = document.getElementById("presentationButton");

// Toggle popup from hidden to show or vice versa
function showPopUp() {
  popUpContainer.classList.toggle("show");
  popUp.classList.toggle("show");
}

// Get a non-repeating random number
function getRandomNumberWithoutRepetition (min, max, array) {
  let x = 0;
  x = Math.floor(Math.random() * (max - min) + min);
  while (array.includes(x)) {
    x = Math.floor(Math.random() * (max - min) + min);
  }
  return x;
}

let index = getRandomNumberWithoutRepetition(0, questions.length, num);

function handleQuestion(index) {
  correct.currentTime = 0;
  wrong.currentTime = 0;
  correct.pause();
  wrong.pause();
  num.push(index);
  nume = []
  questionContainer.innerHTML = `<p>${questions[index].question}</p>`;

  answerContainer.innerHTML = "";

  for (let i = 0; i < questions[index].possibleAnswers.length; i++) {
    possibleRandom = getRandomNumberWithoutRepetition(0, questions[index].possibleAnswers.length, nume);
    nume.push(possibleRandom);
    answerContainer.innerHTML += `<div><button><p class = "button">${letters[i]}</p><p>${questions[index].possibleAnswers[possibleRandom]}</p></button></div>`;
  }

  pointsContainer.innerHTML = "";
  for (let i = 0; i < groups.length; i++) {
    pointsContainer.innerHTML += `<div><span style='background-color: ${groups[i]};'></span><p style='color: ${groups[i]}; font-size: 2rem; margin:0; padding:0;'>${localStorage.getItem(`Group${i+1}`)}</p></div>`;
  }1
  
  let answers = answerContainer.querySelectorAll("button");

  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
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
  if (num.length === questions.length) {
    popUp.innerHTML = `¡Gracias por participar!`;
    popUp.style.color = "pink";
  } else {
    handleQuestion(getRandomNumberWithoutRepetition(0, questions.length, num));
    showPopUp();
  }
});

presentationButton.addEventListener("click", (e) => {
  presentation.classList.toggle("hide");
  container.classList.toggle("show");
});

handleQuestion(index);