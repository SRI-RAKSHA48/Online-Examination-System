document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if (username === "" || password === "") {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter your Student ID and password.";
        return;
    }

    errorMessage.style.color = "green";
    errorMessage.textContent = "Welcome to the Student Examination Portal!";
});