document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("submitForm");
    const cardsContainer = document.getElementById("cardsContainer");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const foodName = document.getElementById("foodName").value;
        const description = document.getElementById("desc").value;
        const imageURL = document.getElementById("imageURL").value;
        const rank = parseInt(document.getElementById("rank").value, 10);

        if (!foodName || !description || !imageURL || isNaN(rank)) {
            alert("Please fill all fields!");
            return;
        }

        createCard(foodName, description, imageURL, rank);
    });

    function createCard(foodName, description, imageURL, rank) {
        const card = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h2");
        const desc = document.createElement("p");
        const rankDisplay = document.createElement("div");
        const deleteButton = document.createElement("button");

        img.src = imageURL;
        name.textContent = foodName;
        desc.textContent = description;
        rankDisplay.textContent = `${rank}`;
        rankDisplay.className = 'rank-display';
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            const row = card.parentNode;
            row.removeChild(card);
            if (row.children.length === 0) {
                cardsContainer.removeChild(row);
            }
        };

        card.appendChild(rankDisplay)
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(img);
        card.appendChild(deleteButton);
        card.style.order = rank;
        card.className = 'card';

        insertCardByRank(card, rank);
    }

    function insertCardByRank(card, rank) {
        const allCards = Array.from(cardsContainer.querySelectorAll('.card'));
        allCards.forEach(existingCard => {
            const existingRank = parseInt(existingCard.style.order, 10);
            if (existingRank >= rank) {
                existingCard.style.order = existingRank + 1;
                existingCard.querySelector('.rank-display').textContent = `${existingRank + 1}`;
            }
        });
    
        card.style.order = rank;
    
        allCards.push(card);
        allCards.sort((a, b) => parseInt(a.style.order, 10) - parseInt(b.style.order, 10));
    
        while (cardsContainer.firstChild) {
            cardsContainer.removeChild(cardsContainer.firstChild);
        }
    
        var currentRow;
        allCards.forEach((sortedCard, index) => {
            if (index % 5 === 0) {  
                currentRow = document.createElement('div');
                currentRow.className = 'row';
                cardsContainer.appendChild(currentRow);
            }
            currentRow.appendChild(sortedCard);
        });
    }
});
