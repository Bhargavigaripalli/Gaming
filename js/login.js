 // SHOW / HIDE PASSWORD

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


// LOGIN

const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const email =
    document.getElementById("email").value.trim();

    const passwordValue =
    document.getElementById("password").value.trim();

    if(email === "" || passwordValue === ""){

        alert("Please fill all fields");
        return;

    }

    // Redirect to 404 page

    window.location.href = "404.html";

});