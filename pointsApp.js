import { groups, groupPoints } from "./functions.js"

let plus = [];
let minus = [];
const pointsContainerTwo = window.document.getElementById("puntosContenedor");

function clickPlusHandler(e) {
    groupPoints[(e.target.id[(e.target.id.length-1)] - 1)].point++;
    console.log(groupPoints[(e.target.id[(e.target.id.length-1)] - 1)].point);
    load();
}

function clickMinusHandler(e) {
    if (groupPoints[(e.target.id[(e.target.id.length-1)] - 1)].point > 0) {
        groupPoints[(e.target.id[(e.target.id.length-1)] - 1)].point--;
    load();
    }
    console.log(groupPoints[(e.target.id[(e.target.id.length-1)] - 1)].point);
}

function load() {

    pointsContainerTwo.innerHTML = "";
    
    for (let i = 0; i < groups.length; i++) {
        pointsContainerTwo.innerHTML += `<div><span style='background-color: ${groups[i]};'></span><p id='group-${i+1}' style='color: ${groups[i]};'>${groupPoints[i].point}</p><button id='plus-${i+1}'>+</button><button id='minus-${i+1}'>-</button></div>`;
    }

    for (let i = 0; i < groups.length; i++) {
        plus.push(document.getElementById(`plus-${i+1}`));
        minus.push(document.getElementById(`minus-${i+1}`));
    }

    plus.forEach((plusButton) => {
        plusButton.addEventListener("click", clickPlusHandler, false);
    });

    minus.forEach((minusButton) => {
        minusButton.addEventListener("click", clickMinusHandler, false);
    });

}

load();