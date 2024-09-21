export let groupPoints = {};
export const groups = ["blue", "red", "green", "orange"];

for (let i = 0; i < groups.length; i++) {
    groupPoints[i] = {
        groupName: `Group${i+1}`,
        point: 0,
    };
}

export function replaceText(text) {
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return text;
}
