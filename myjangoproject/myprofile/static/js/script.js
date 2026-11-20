function showWelcome() {
    alert("Welcome to my Django Profile Website!");
}

document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;

        document.getElementById("result").innerText =
            "Thank you " + name +
            "! Your message has been received (Demo).";

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        document.getElementById("contactForm").reset();
    });