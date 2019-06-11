window.onload = function() {
// Get the modal
    var modal = document.getElementById("modalBox");
    var body = document.getElementById("body");

// Get the button that opens the modal
    var btn = document.getElementById("confirmBooking");

// Get the <span> element that closes the modal
    var span = document.getElementById("close");
    var button1 = document.getElementById("button1");
    var button2 = document.getElementById("button2");

// When the user clicks the button, open the modal
    btn.onclick = function () {
        modal.style.display = "block";
        body.classList.add("faded");
    }

// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
        body.classList.remove("faded");
    }
    button1.onclick = function () {
        modal.style.display = "none";
        body.classList.remove("faded");
    }
    button2.onclick = function () {
        modal.style.display = "none";
        body.classList.remove("faded");
    }

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}