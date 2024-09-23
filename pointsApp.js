import { groups } from "./functions.js"
import { clickMinusHandler, clickPlusHandler } from "./events.js"

localStorage.clear();
localStorage.setItem("Group1", 0);
localStorage.setItem("Group2", 0);
localStorage.setItem("Group3", 0);
localStorage.setItem("Group4", 0);


export const pointsContainerTwo = document.getElementById("puntosContenedor");
export let plus = [];
export let minus = [];

export function load() {

    pointsContainerTwo.innerHTML = "";
    
    for (let i = 0; i < groups.length; i++) {
        pointsContainerTwo.innerHTML += `<div><span style='background-color: ${groups[i]};'></span><p id='group-${i+1}' style='color: ${groups[i]}; font-size: 2rem; margin:0; padding:0;'>${localStorage.getItem(`Group${i+1}`)}</p><button id='plus-${i+1}'>+</button><button id='minus-${i+1}'>-</button></div>`;
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