const playersDisplayContainer = document.getElementById('players-display-container');

// select player and display all selected players
function selectPlayer(name, button) {
    const playerName = getElementTexetById(name, false);
    const p = document.createElement('li');

    // players can not selected more than five
    const playersCount = playersDisplayContainer.childElementCount;
    if (playersCount > 4) {
        alert("Players Limit Exceeded!!!");
        return;
    }
    else {
        p.innerText = playerName;
        playersDisplayContainer.appendChild(p);
    }

    // after selected button will be disabled
    const selectButton = document.getElementById(button);
    selectButton.setAttribute('disabled', true);
    selectButton.style.border = '0';
}

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