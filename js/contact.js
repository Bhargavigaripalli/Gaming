 // CONTACT FORM VALIDATION

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        document.getElementById("name")
        .value.trim();

    const email =
        document.getElementById("email")
        .value.trim();

    const subject =
        document.getElementById("subject")
        .value.trim();

    const message =
        document.getElementById("message")
        .value.trim();

    // Name Validation
    const nameRegex = /^[A-Za-z ]+$/;

    if (name === "") {

        alert("Please enter your name");

        return;
    }

    if (!nameRegex.test(name)) {

        alert(
            "Name should contain only alphabets and spaces"
        );

        return;
    }

    if (name.length > 16) {

        alert(
            "Name should not exceed 16 characters"
        );

        return;
    }

    // Email Validation
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        alert("Please enter your email");

        return;
    }

    if (!emailRegex.test(email)) {

        alert(
            "Please enter a valid email address"
        );

        return;
    }

    // Subject Validation
    if (subject === "") {

        alert("Please enter subject");

        return;
    }

    // Message Validation
    if (message === "") {

        alert("Please enter your message");

        return;
    }

    // Success Redirect
    window.location.href = "404.html";

});


// MOBILE MENU TOGGLE

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });

}