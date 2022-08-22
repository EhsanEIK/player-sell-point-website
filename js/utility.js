function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function getElementTexetById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText
    return elementText;
}

function setElementextById(elementId, valueOfElement) {
    const element = document.getElementById(elementId);
    element.innerText = valueOfElement;
}
