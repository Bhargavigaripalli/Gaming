 // Search Functionality

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const searchValue = this.value.toLowerCase();

        const gameCards =
            document.querySelectorAll(".game-card");

        gameCards.forEach(card => {

            const title =
                card.querySelector("h3")
                .textContent
                .toLowerCase();

            if(title.includes(searchValue)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}


// Mobile Menu

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}