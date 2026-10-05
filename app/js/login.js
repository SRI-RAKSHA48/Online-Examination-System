document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.style.color = "red";

    // Validate username
    if (username === "") {
        errorMessage.textContent = "Please enter your Student ID.";
        return;
    }

    // Validate password
    if (password === "") {
        errorMessage.textContent = "Please enter your password.";
        return;
    }

    // Validate password length
    if (password.length < 6) {
        errorMessage.textContent = "Password must contain at least 6 characters.";
        return;
    }

    // Validate student ID
    if (username !== "student") {
        errorMessage.textContent = "Invalid Student ID. Please try again.";
        return;
    }

    // Successful login
    errorMessage.style.color = "green";
    errorMessage.textContent =
        "Welcome to the Student Examination Portal!";
});