import { plus, minus, load } from "./pointsApp.js"

export function clickPlusHandler(e) {
    switch (`Group${e.target.id.substr(5)}`) {
        case "Group1":
            localStorage.Group1++;
            break;
        case "Group2":
            localStorage.Group2++;
            break;
        case "Group3":
            localStorage.Group3++;
            break;
        case "Group4":
            localStorage.Group4++;
            break;
    }
    load();
}

export function clickMinusHandler(e) {
    switch (`Group${e.target.id.substr(6)}`) {
        case "Group1":
            localStorage.Group1--;
            break;
        case "Group2":
            localStorage.Group2--;
            break;
        case "Group3":
            localStorage.Group3--;
            break;
        case "Group4":
            localStorage.Group4--;
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