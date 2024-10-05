import { groups } from "./functions.js"
import { clickMinusHandler, clickPlusHandler } from "./events.js"

localStorage.clear();
localStorage.setItem("Group1", 0);
localStorage.setItem("Group2", 0);
localStorage.setItem("Group3", 0);
localStorage.setItem("Group4", 0);
localStorage.setItem("Group5", 0);
localStorage.setItem("Group6", 0);


export const pointsContainerTwo = document.getElementById("pointsContainer");
export const pointsIncrement = document.getElementById("pointsIncrement");
export let plus = [];
export let minus = [];

export function load() {

    console.log();

    if (pointsIncrement.length < 10) {
        for (let i = 0; i < 10; i++) {
            pointsIncrement.innerHTML += `<option value="${i+1}">${i+1}</option>`;
        }
    }

    pointsContainerTwo.innerHTML = "";
    
    for (let i = 0; i < groups.length; i++) {
        pointsContainerTwo.innerHTML += `<div><p id='group-${i+1}' style='color: ${groups[i]}; font-size: 4rem; margin:0; padding:0;'>${localStorage.getItem(`Group${i+1}`)}</p><div style='width:40%; height:100%; display:flex; flex-direction:column; flex-wrap:wrap;'><button id='plus-${i+1}' style='color: ${groups[i]}; font-size: 4rem; display:flex; align-items:center; justify-content:center; background:none; border:none;'>+</button><button id='minus-${i+1}' style='display:flex; align-items:center; justify-content:center; color: ${groups[i]}; font-size: 4rem; background:none; border:none;'>-</button></div></div>`;
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