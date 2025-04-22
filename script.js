document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const flight = document.getElementById("flight").value;

    const confirmationMessage = `
        Reservation Confirmed! <br>
        Passenger Name: ${name} <br>
        Email: ${email} <br>
        Flight: ${flight}
    `;

    document.getElementById("confirmationMessage").innerHTML = confirmationMessage;
});
