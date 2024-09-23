export const groups = ["blue", "red", "green", "orange"];

export function replaceText(text) {
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return text;
}
