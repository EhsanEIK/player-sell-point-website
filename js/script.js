// select player and display all selected players
function selectPlayer(name, button) {
    const nameElementOfPlayer = document.getElementById(name);
    const playerName = nameElementOfPlayer.innerText;

    const playersDisplayContainer = document.getElementById('players-display-container');
    const p = document.createElement('li');

    // players can not selected more than five
    const playersCount = playersDisplayContainer.childElementCount;
    if (playersCount > 4) {
        alert("Players Limit Exceeded!!");
        return;
    }
    else {
        p.innerText = playerName;
        playersDisplayContainer.appendChild(p);
    }

    // after selected button will be disabled
    const selectButton = document.getElementById(button);
    selectButton.setAttribute('disabled', true);
    selectButton.style.backgroundColor = 'grey';
    selectButton.style.border = '0';
}