// ==========================
// BOOK.JS
// ==========================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================
    // Set Minimum Journey Date
    // ==========================

    const dateInput = document.querySelector('input[type="date"]');

    if (dateInput) {

        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
        dateInput.value = today;

    }

    // ==========================
    // Swap Stations
    // ==========================

    const swapBtn = document.getElementById("swapBtn");

    const fromStation = document.getElementById("fromStation");

    const toStation = document.getElementById("toStation");

    if (swapBtn) {

        swapBtn.addEventListener("click", function () {

            let temp = fromStation.value;
            fromStation.value = toStation.value;
            toStation.value = temp;

        });

    }

    // ==========================
    // Booking Form Validation
    // ==========================

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const from = fromStation.value.trim();
            const to = toStation.value.trim();
            const date = dateInput.value;

            if (from === "") {

                alert("Please enter Source Station");
                fromStation.focus();
                return;

            }

            if (to === "") {

                alert("Please enter Destination Station");
                toStation.focus();
                return;

            }

            if (from.toLowerCase() === to.toLowerCase()) {

                alert("Source and Destination cannot be the same.");
                return;

            }

            if (date === "") {

                alert("Please select a Journey Date");
                return;

            }

            const button = document.querySelector(".search-btn");

            button.innerHTML =
                '<i class="fa-solid fa-spinner fa-spin"></i> Searching...';

            button.disabled = true;

            setTimeout(function () {

                button.innerHTML =
                    '<i class="fa-solid fa-circle-check"></i> Trains Found';

                button.style.background = "#28a745";

                setTimeout(function () {

                    alert(
                        "Train search completed successfully!\n\nFrom : " +
                        from +
                        "\nTo : " +
                        to +
                        "\nDate : " +
                        date
                    );

                    button.innerHTML =
                        '<i class="fa-solid fa-magnifying-glass"></i> Search Trains';

                    button.style.background = "";

                    button.disabled = false;

                }, 1000);

            }, 2000);

        });

    }

    // ==========================
    // Navbar Shadow on Scroll
    // ==========================

    window.addEventListener("scroll", function () {

        const navbar = document.querySelector("header");

        if (window.scrollY > 80) {

            navbar.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";

        }

        else {

            navbar.style.boxShadow = "0 4px 15px rgba(0,0,0,.08)";

        }

    });

    // ==========================
    // Smooth Scroll
    // ==========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    // ==========================
    // Train Card Hover Effect
    // ==========================

    const trainCards = document.querySelectorAll(".train-card");

    trainCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px) scale(1.03)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px) scale(1)";

        });

    });

    // ==========================
    // Service Card Animation
    // ==========================

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.background = "#0b72ff";
            this.style.color = "white";

            const icon = this.querySelector("i");

            if (icon) {

                icon.style.color = "white";

            }

        });

        card.addEventListener("mouseleave", function () {

            this.style.background = "white";
            this.style.color = "#222";

            const icon = this.querySelector("i");

            if (icon) {

                icon.style.color = "#0b72ff";

            }

        });

    });

    // ==========================
    // Button Ripple Effect
    // ==========================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.96)";

            setTimeout(() => {

                this.style.transform = "";

            }, 120);

        });

    });

    // ==========================
    // Welcome Message
    // ==========================

    console.log("=======================================");
    console.log(" IRCTC Booking Website Loaded");
    console.log(" Developed Successfully");
    console.log("=======================================");

});
