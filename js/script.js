const playersDisplayContainer = document.getElementById('players-display-container');
let count = 0;

// select player and display all selected players
function selectPlayer(name) {
    document.getElementById('default-text').style.display = 'none';

    const playerName = getElementTexetById(name, false);
    const li = document.createElement('li');

    // validation for checking can not selected more than five players
    const playersCount = playersDisplayContainer.childElementCount;
    if (playersCount == 5) {
        alert("Players Limit Exceeded!!!");
        return;
    }
    else {
        li.innerText = playerName;
        playersDisplayContainer.appendChild(li);
    }
}

// after selection, button will be disabled
document.getElementById('all-players-container').addEventListener('click', function (event) {
    if (count == 5) {
        return;
    }
    else {
        const button = event.target;
        const buttonText = button.innerText;
        if (buttonText.toLowerCase() == 'select') {
            button.setAttribute('disabled', true);
            count++;
        }
    }
})

// total players price calculation
document.getElementById('btn-calculate').addEventListener('click', function () {
    const totalPlayers = playersDisplayContainer.childElementCount;
    const perPlayerExpense = getInputValueById('per-player-input-field');

    // validation for checking the input value is number or not
    if (isNaN(perPlayerExpense)) {
        alert('Please give a number in per player input!');
        return;
    }

    const playersExpenses = perPlayerExpense * totalPlayers;
    setElementextById('player-expenses-element', playersExpenses);
})

// final budget calculation
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playersExpenses = getElementTexetById('player-expenses-element', true);
    const managerCost = getInputValueById('manager-input-field');
    const coachCost = getInputValueById('coach-input-field');

    // validation for checking the input value is number or not
    if (isNaN(playersExpenses) || isNaN(managerCost) || isNaN(coachCost)) {
        alert('Please give a number input for final calculation!');
        return;
    }

    const totalCost = playersExpenses + managerCost + coachCost;
    setElementextById('total-element', totalCost);
})