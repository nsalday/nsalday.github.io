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
        const deleteButton = document.createElement("button");

        img.src = imageURL;
        name.textContent = foodName;
        desc.textContent = description;
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            const row = card.parentNode;
            row.removeChild(card);
            if (row.children.length === 0) {
                cardsContainer.removeChild(row);
            }
        };

        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(img);
        card.appendChild(deleteButton);
        card.style.order = rank;
        card.className = 'card';

        insertCardByRank(card, rank);
    }

    function insertCardByRank(card, rank) {
        const rows = cardsContainer.querySelectorAll('.row');
        let lastRow = rows[rows.length - 1];
        if (!lastRow || lastRow.children.length === 5) {
            lastRow = document.createElement('div');
            lastRow.className = 'row';
            cardsContainer.appendChild(lastRow);
        }
        lastRow.appendChild(card);
    }
});
