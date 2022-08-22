function selectPlayer(name, button) {
    const nameElementOfPlayer = document.getElementById(name);
    const playerName = nameElementOfPlayer.innerText;

    const playersDisplayContainer = document.getElementById('players-display-container');
    const p = document.createElement('li');
    p.innerText = playerName;
    playersDisplayContainer.appendChild(p);

    const selectButton = document.getElementById(button);
    selectButton.setAttribute('disabled', true);
    selectButton.style.backgroundColor = 'grey';
    selectButton.style.border = '0';
}