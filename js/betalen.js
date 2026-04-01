const seatsContainer = document.getElementById("seats");
const prijsText = document.getElementById("prijs");

let prijsPerStoel = 7.50;
let totaal = 0;

/* STOELEN MAKEN */
for (let i = 0; i < 32; i++) {
    const seat = document.createElement("div");
    seat.classList.add("seat");

    // random bezette stoelen
    if (Math.random() < 0.3) {
        seat.classList.add("taken");
    }

    seat.addEventListener("click", () => {

        if (seat.classList.contains("taken")) return;

        seat.classList.toggle("selected");

        if (seat.classList.contains("selected")) {
            totaal += prijsPerStoel;
        } else {
            totaal -= prijsPerStoel;
        }

        prijsText.textContent = "totale prijs: €" + totaal.toFixed(2);
    });

    seatsContainer.appendChild(seat);
}