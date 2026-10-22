// ---------- Mobile Menu ----------

// Find the hamburger button and the menu links on the page
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

// When the button is clicked, add or remove the "open" class
menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("open");
});

// Close the menu after a link is clicked (so it doesn't stay open on mobile)
const allLinks = document.querySelectorAll("#nav-links a");

for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener("click", function () {
        navLinks.classList.remove("open");
    });
}


// ---------- Contact Form ----------

// Find the form and the place where we show messages
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Run this code when the form is submitted
form.addEventListener("submit", function (event) {

    // Stop the page from reloading
    event.preventDefault();

    // Get what the visitor typed (trim removes extra spaces)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Check 1: are all fields filled in?
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all the fields.";
        formMessage.className = "error";
        return;
    }

    // Check 2: does the email look valid? (a simple check for the @ symbol)
    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.className = "error";
        return;
    }

    // Everything is fine, so show a success message
    formMessage.textContent = "Thank you, " + name + "! Your form is complete. (Demo only: this form is not connected to a backend yet, so nothing was sent.)";
    formMessage.className = "success";

    // Clear the form
    form.reset();

    /*
        FUTURE BACKEND:
        Right now this form does NOT send an email.
        To receive real messages, you can connect a form service such as
        Formspree or Web3Forms. They give you a link to put in the form's
        "action" attribute in index.html. When you do that, you can also
        remove the "Demo only" part of the success message above.
    */
});