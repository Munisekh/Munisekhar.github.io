// Get all the team cards on the page
const teamCards = document.querySelectorAll('.team-card-1');

// Loop through each team card and add a click event listener
teamCards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the ID of the clicked team from the data-teamid attribute
    const teamId = card.getAttribute('data-teamid');
    
    // Navigate to the team details page with the selected team ID
    window.location.href = `team-details.html?id=${teamId}`;
  });
});
