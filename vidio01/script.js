// ================= SEARCH =================

function toggleSearch() {

    const searchBox = document.getElementById("searchBox");

    searchBox.classList.toggle("show");

    if (searchBox.classList.contains("show")) {

        document.getElementById("searchInput").focus();

    }

}


// ================= SEARCH MOVIE =================

function searchMovie() {

    const input =
        document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".movie-card");

    cards.forEach(card => {

        const title =
            card
            .getAttribute("data-title");

        if (!title) return;

        if (title.toLowerCase().includes(input)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// ================= NAVBAR SCROLL =================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(8,8,8,.97)";

    } else {

        navbar.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,.95), rgba(0,0,0,.65), transparent)";

    }

});


// ================= PLAY BUTTON =================

document
.querySelectorAll(".play-btn, .card-overlay button")
.forEach(button => {

    button.addEventListener("click", () => {

        alert("Video akan diputar...");

    });

});


// ================= LOGIN =================

document
.querySelector(".login-btn")
.addEventListener("click", () => {

    alert("Halaman login akan dibuka.");

});
