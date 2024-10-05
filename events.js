import { plus, minus, load, pointsIncrement } from "./pointsApp.js"

export function clickPlusHandler(e) {
    switch (`Group${e.target.id.substr(5)}`) {
        case "Group1":
            localStorage.Group1 = parseInt(localStorage.Group1) + parseInt(pointsIncrement.value);
            break;
        case "Group2":
            localStorage.Group2 = parseInt(localStorage.Group2) + parseInt(pointsIncrement.value);
            break;
        case "Group3":
            localStorage.Group3 = parseInt(localStorage.Group3) + parseInt(pointsIncrement.value);
            break;
        case "Group4":
            localStorage.Group4 = parseInt(localStorage.Group4) + parseInt(pointsIncrement.value);
            break;
        case "Group5":
            localStorage.Group5 = parseInt(localStorage.Group5) + parseInt(pointsIncrement.value);
            break;
        case "Group6":
            localStorage.Group6 = parseInt(localStorage.Group6) + parseInt(pointsIncrement.value);
            break;
    }
    load();
}

export function clickMinusHandler(e) {
    switch (`Group${e.target.id.substr(6)}`) {
        case "Group1":
            if (localStorage.Group1 > 0) {
                if (localStorage.Group1 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group1 = parseInt(localStorage.Group1) - parseInt(pointsIncrement.value);
                }
            }
            break;
        case "Group2":
            if (localStorage.Group2 > 0) {
                if (localStorage.Group2 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group2 = parseInt(localStorage.Group2) - parseInt(pointsIncrement.value);
                }
            }
            break;
        case "Group3":
            if (localStorage.Group3 > 0) {
                if (localStorage.Group3 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group3 = parseInt(localStorage.Group3) - parseInt(pointsIncrement.value);
                }
            }
            break;
        case "Group4":
            if (localStorage.Group4 > 0) {
                if (localStorage.Group4 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group4 = parseInt(localStorage.Group4) - parseInt(pointsIncrement.value);
                }
            }
            break;
        case "Group5":
            if (localStorage.Group5 > 0) {
                if (localStorage.Group5 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group5 = parseInt(localStorage.Group5) - parseInt(pointsIncrement.value);
                }
            }
            break;
        case "Group6":
            if (localStorage.Group6 > 0) {
                if (localStorage.Group6 >= parseInt(pointsIncrement.value)) {
                    localStorage.Group6 = parseInt(localStorage.Group6) - parseInt(pointsIncrement.value);
                }
            }
            break;
    }
    load();
}

plus.forEach((plusButton) => {
    plusButton.addEventListener("click", clickPlusHandler, false);
});

minus.forEach((minusButton) => {
    minusButton.addEventListener("click", clickMinusHandler, false);
    load();
});