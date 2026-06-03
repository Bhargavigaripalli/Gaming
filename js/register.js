 const registerForm =
document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const fullname =
    document.getElementById("fullname").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const password =
    document.getElementById("password").value;

    // NAME VALIDATION

    const nameRegex = /^[A-Za-z ]+$/;

    if (fullname === "") {

        alert("Please enter your full name");

        return;
    }

    if (!nameRegex.test(fullname)) {

        alert(
            "Name should contain only alphabets and spaces."
        );

        return;
    }

    if (fullname.length > 16) {

        alert(
            "Name should not exceed 16 characters."
        );

        return;
    }

    // EMAIL VALIDATION

    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;
    }

    // PASSWORD VALIDATION

    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(password)) {

        alert(
            "Password must contain:\n\n" +
            "• Minimum 8 characters\n" +
            "• One uppercase letter\n" +
            "• One lowercase letter\n" +
            "• One number\n" +
            "• One special character"
        );

        return;
    }

    alert("Account Created Successfully!");

    window.location.href = "404.html";

});


// GOOGLE BUTTON

const googleBtn =
document.getElementById("googleBtn");

googleBtn.addEventListener("click", () => {

    window.location.href = "404.html";

});