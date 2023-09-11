// script.js
const data = [
    {
        "id": 0,
        "playerName": "Hardik Pandya",
        "from": "MI",
        "price": "6.50 Cr",
        "isPlaying": true,
        "description": "All-rounder"
    },
    {
        "id": 1,
        "playerName": "Virat Kohli",
        "from": "RCB",
        "price": "8.00 Cr",
        "isPlaying": true,
        "description": "Batsman"
    },
    // Add more data entries as needed
];

const container = document.getElementById('card-container');

// Function to create a card element for a player
function createCard(player) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${player.playerName}</h2>
        <p>From: ${player.from}</p>
        <p>Price: ${player.price}</p>
        <p>${player.isPlaying ? 'Playing' : 'Not Playing'}</p>
        <p>${player.description}</p>
    `;
    return card;
}

// Populate the container with cards
data.forEach(player => {
    const card = createCard(player);
    container.appendChild(card);
});
