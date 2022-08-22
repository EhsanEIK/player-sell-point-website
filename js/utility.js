function getInputValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputValue = parseFloat(inputField.value);
    return inputValue;
}

function getElementTexetById(elementId, isNumber) {
    const element = document.getElementById(elementId);
    if (isNumber == true) {
        const elementText = parseFloat(element.innerText);
        return elementText;
    }
    const elementText = element.innerText;
    return elementText;
}

function setElementextById(elementId, valueOfElement) {
    const element = document.getElementById(elementId);
    element.innerText = valueOfElement;
}
