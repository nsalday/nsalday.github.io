document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submitForm"); // Get form
    const cardsContainer = document.getElementById("cardsContainer"); // create a card container.

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        // Get all form values.
        const foodName = document.getElementById("foodName").value;
        const description = document.getElementById("desc").value;
        const imageURL = document.getElementById("imageURL").value;
        const rank = parseInt(document.getElementById("rank").value, 10);

        // If field is empty, alert user.
        if (!foodName || !description || !imageURL || isNaN(rank)) {
            alert("Please fill all fields!");
            return;
        }

        // Create card containing the details from the form.
        createCard(foodName, description, imageURL, rank);
    });

    // Creates a card.
    function createCard(foodName, description, imageURL, rank) {
        // Create necessary elements for the card.
        const card = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h2");
        const desc = document.createElement("p");
        const rankDisplay = document.createElement("div");
        const deleteButton = document.createElement("button");

        // Display parameter values to the following elements.
        img.src = imageURL;
        name.textContent = foodName;
        desc.textContent = description;
        rankDisplay.textContent = `${rank}`;
        rankDisplay.className = 'rank-display';
        deleteButton.textContent = "Delete";

        // If deleteButton's clicked, delete the card.
        deleteButton.onclick = function() {
            const row = card.parentNode;
            row.removeChild(card); // Remove card from the row.
            if (row.children.length === 0) {
                cardsContainer.removeChild(row);
            }
        };

        // Append elements to the card.
        card.appendChild(rankDisplay)
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(img);
        card.appendChild(deleteButton);
        card.style.order = rank;
        card.className = 'card';

        // Order the cards by rank.
        insertCardByRank(card, rank);
    }

    // Insert card by rank
    function insertCardByRank(card, rank) {
        const allCards = Array.from(cardsContainer.querySelectorAll('.card')); // Gets all cards.

        // Update the rank for each card. If the existing card's rank is greater than or equal to the new rank,
        // increase their rank by 1 to make space for the new card.
        allCards.forEach(existingCard => {
            const existingRank = parseInt(existingCard.style.order, 10);
            if (existingRank >= rank) {
                existingCard.style.order = existingRank + 1; 
                existingCard.querySelector('.rank-display').textContent = `${existingRank + 1}`;
            }
        });
        
        // Set the new card to its current rank.
        card.style.order = rank;
        
        // Add the card to the set of existing cards and sort them.
        allCards.push(card);
        allCards.sort((a, b) => parseInt(a.style.order, 10) - parseInt(b.style.order, 10));
        
        // Clear the current contents of the cards container.
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }
        
        // Add sorted cards back to the container in rows of 5. This is a design choice.
        var currentRow;
        allCards.forEach((sortedCard, index) => {
            // Create a new row every 5 cards.
            if (index % 5 === 0) {  
                currentRow = document.createElement('div');
                currentRow.className = 'row';
                cardsContainer.appendChild(currentRow);
            }
            // Append the card to the current row.
            currentRow.appendChild(sortedCard);
        });
    }
});
