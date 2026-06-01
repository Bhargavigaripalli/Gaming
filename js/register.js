const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Account Created Successfully!");

    window.location.href = "login.html";

});

const googleBtn =
document.getElementById("googleBtn");

googleBtn.addEventListener("click", () => {

    alert("Google Sign-In UI Demo");

    window.location.href = "login.html";

});