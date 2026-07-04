function scrollToBooking() {
    document.getElementById("booking")
    .scrollIntoView({
        behavior: "smooth"
    });
}


// ==============================
// Indian Railway Stations
// ==============================

let stations = [
  "Arakkonam Junction",
  "Arani Road Junction",
  "Basin Bridge Junction",
  "Chengalpattu Junction",
  "Coimbatore Junction",
  "Cuddalore Port Junction",
  "Dindigul Junction",
  "Erode Junction",
  "Golden Rock",
  "Irugur Junction",
  "Jolarpettai Junction",
  "Karaikkudi Junction",
  "Karur Junction",
  "Katpadi Junction",
  "Madurai Junction",
  "Magnesite Junction",
  "Manamadurai Junction",
  "Mayiladuthurai Junction",
  "Nagapattinam Junction",
  "Nagercoil Junction",
  "Nidamangalam Junction",
  "Omalur Junction",
  "Parangipettai",
  "Peralam Junction",
  "Pilamedu",
  "Podanur Junction",
  "Pollachi Junction",
  "Salem Junction",
  "Singanallur",
  "Tenkasi Junction",
  "Thanjavur Junction",
  "Tharangambadi",
  "Thiruvarur Junction",
  "Tiruchchirappalli Junction",
  "Tirunelveli Junction",
  "Tiruturaipundi Junction",
  "Vanchi Maniyachchi Junction",
  "Villupuram Junction",
  "Virudhunagar Junction",
  "Vriddhachalam Junction"
];



// ==============================
// Station Auto Suggestion
// ==============================

function addAutoSuggestion(inputId) {

    let input = document.getElementById(inputId);

    let dataList = document.createElement("datalist");

    dataList.id = inputId + "List";

    document.body.appendChild(dataList);

    input.setAttribute("list", dataList.id);


    input.addEventListener("input", function() {

        let value = this.value.toLowerCase();

        dataList.innerHTML = "";


        stations.forEach(station => {

            if (station.toLowerCase().includes(value)) {

                let option = document.createElement("option");

                option.value = station;

                dataList.appendChild(option);

            }

        });

    });

}


// Apply suggestion for both boxes

addAutoSuggestion("fromStation");
addAutoSuggestion("toStation");



// ==============================
// Search Train Button
// ==============================

let searchButton = document.getElementById("searchBtn");


searchButton.addEventListener("click", function() {

    let from = document.getElementById("fromStation").value;
    let to = document.getElementById("toStation").value;
    let date = document.getElementById("journeyDate").value;


    if (from === "" || to === "" || date === "") {

        alert("Please fill all booking details.");

    }
    else if (from === to) {

        alert("From and To stations cannot be the same.");

    }
    else {

        alert(
            "Searching trains from " +
            from +
            " to " +
            to +
            " on " +
            date +
            " 🚆"
        );

    }

});
// ==============================
// Train Card Booking Buttons
// ==============================

let buttons = document.querySelectorAll(".card button");


buttons.forEach(button => {

    button.addEventListener("click", function() {

        alert("Your seat booking process has started 🚆");

    });

});
