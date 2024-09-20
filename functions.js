export function replaceText(text) {
    text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return text;
}