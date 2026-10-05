document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.textContent = "Username and password are required.";
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password must contain at least 6 characters.";
        return;
    }

    errorMessage.style.color = "green";
    errorMessage.textContent = "Login successful!";
});