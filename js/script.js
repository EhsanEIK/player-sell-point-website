// select player & disabled button and display all selected players
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;

    document.getElementById('default-text').innerText = '';

    const showPlayersContainer = document.getElementById('players-display-container');
    if (showPlayersContainer.children.length < 5) {
        const li = document.createElement('li');
        li.innerText = playerName;
        showPlayersContainer.appendChild(li);

        element.setAttribute('disabled', true);
    }
    else {
        alert('Players Limit Exceeded!!!');
        return;
    }
}

// total players price calculation
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerAmount = getInputValueById('per-player-input-field');

    // const totalPlayers = document.getElementById('players-display-container').childElementCount;
    const totalPlayers = document.getElementById('players-display-container').children.length;
    if (isNaN(perPlayerAmount)) {
        alert('Please give a number in per player input!');
        return;
    }

    const playersExpenses = perPlayerAmount * totalPlayers;
    setElementextById('player-expenses-element', playersExpenses);
})

//final budget calculation
document.getElementById('btn-calculate-total').addEventListener('click', function () {
    const playersExpensesAmount = getElementTexetById('player-expenses-element', true);
    const managerAmount = getInputValueById('manager-input-field');
    const coachAmount = getInputValueById('coach-input-field');

    if (isNaN(managerAmount) || isNaN(coachAmount)) {
        alert('Please give a number input for final calculation!');
        return;
    }
    const finalBudget = playersExpensesAmount + managerAmount + coachAmount;
    setElementextById('total-element', finalBudget);
})