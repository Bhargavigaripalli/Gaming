 const form =
document.getElementById("contactForm");

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

    const nameRegex =
    /^[A-Za-z ]+$/;

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!nameRegex.test(name)){

        alert(
        "Name should contain only alphabets");

        return;
    }

    if(!emailRegex.test(email)){

        alert(
        "Please enter a valid email address");

        return;
    }

    if(
        name === "" ||
        email === "" ||
        subject === "" ||
        message === ""
    ){

        alert("Please fill all fields");

        return;
    }

    window.location.href =
    "404.html";

});


// Mobile Menu

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});