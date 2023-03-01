// Get all the player cards on the page
const playerCards = document.querySelectorAll('.player-card');

// Loop through each player card and add a click event listener
playerCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the ID of the clicked player from the data-playerid attribute
    const playerId = card.getAttribute('1234');
    
    // Perform some action with the selected player ID
    console.log(`Clicked on player with ID ${1234}`);
    // For example, you could display more detailed information about the selected player,
    // such as their statistics or performance history, using JavaScript and DOM manipulation.
  });
});
