document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.style.color = "red";

    if (username === "") {
        errorMessage.textContent = "Please enter your username.";
        return;
    }

    if (password === "") {
        errorMessage.textContent = "Please enter your password.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must contain at least 6 characters.";
        return;
    }

    if (username !== "student") {
        errorMessage.textContent = "Invalid username. Please try again.";
        return;
    }

    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful! Welcome, Student.";
});