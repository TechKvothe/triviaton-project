import { questions } from "./questions.js";
import { groups, groupPoints } from "./functions.js"

const letters = ["A", "B", "C", "D", "E"];
let num = [];
let nume = [];
let possibleRandom;
var wrong = new Audio('songs/wrong.mp3');
var correct = new Audio('songs/correct.mp3');
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const popUp = document.getElementById("popUp");
const pointsContainer = document.getElementById("pointsContainer");
const popUpContainer = document.getElementById("popUpContainer");

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

let index = getRandomNumberWithoutRepetition(0, (questions.length-1), num);

function handleQuestion(index) {
  let answerLength = questions[index].possibleAnswers.length;
  num.push(index);
  nume = []
  questionContainer.innerHTML = `<p>${questions[index].question}</p>`;

  answerContainer.innerHTML = "";

  for (let i = 0; i < answerLength; i++) {
    possibleRandom = getRandomNumberWithoutRepetition(0, answerLength, nume);
    nume.push(possibleRandom);
    answerContainer.innerHTML += `<div><button><p class = "button">${letters[i]}</p><p>${questions[index].possibleAnswers[possibleRandom]}</p></button></div>`;
  }

  pointsContainer.innerHTML = "";

  for (let i = 0; i < groups.length; i++) {
    console.log(groupPoints[i].point);
    pointsContainer.innerHTML += `<div><span style='background-color: ${groups[i]};'></span><p style='color: ${groups[i]};'>${groupPoints[i].point}</p></div>`;
  }

  let answers = document.querySelectorAll("button");

  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      num.push(index);
      if (e.target.textContent.substring(1) === questions[index].correctAnswer) {
        popUp.innerHTML = `¡Correcto!`;
        popUp.style.color = "green";
        correct.play();
        correct.currentTime = 0;
        showPopUp();
      } else {
        popUp.innerHTML = `¡Incorrecto!`;
        popUp.style.color = "red";
        wrong.play();
        wrong.currentTime = 0;
        showPopUp();
      }
    });
  });
}

popUpContainer.addEventListener("click", (e) => {
  if (num.length == questions.length) {
    popUp.innerHTML = `¡Gracias por participar!`;
    popUp.style.color = "pink";
  } else {
    handleQuestion(getRandomNumberWithoutRepetition(0, (questions.length-1), num));
    showPopUp();
  } 
});

handleQuestion(index);