// SHOW/HIDE PASSWORD

const togglePassword =
document.getElementById("togglePassword");

const password =
document.getElementById("password");

togglePassword.addEventListener("click", () => {

    const type =
        password.getAttribute("type") === "password"
            ? "text"
            : "password";

    password.setAttribute("type", type);

    togglePassword.classList.toggle("fa-eye");
    togglePassword.classList.toggle("fa-eye-slash");

});


// LOGIN VALIDATION

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
        document.getElementById("email").value;

    const passwordValue =
        document.getElementById("password").value;

    if (
        email === "admin@stackly.com" &&
        passwordValue === "123456"
    ) {

        alert("Login Successful!");

        window.location.href = "index.html";

    } else {

        alert("Invalid Email or Password");

    }

});