let timeLeft = 5 * 60;

const timer = setInterval(function() {

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        "Time Remaining: " +
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

    timeLeft--;

    if (timeLeft < 0) {
        clearInterval(timer);

        alert("Time is over! Your exam will be submitted automatically.");

        document.getElementById("examForm").submit();
    }

}, 1000);


document.getElementById("examForm").addEventListener("submit", function(event) {
    event.preventDefault();

    clearInterval(timer);

    const correctAnswers = {
        q1: "HTML",
        q2: "class",
        q3: "Queue",
        q4: "//",
        q5: "main"
    };

    let score = 0;

    for (let question in correctAnswers) {

        const selectedAnswer = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (
            selectedAnswer &&
            selectedAnswer.value === correctAnswers[question]
        ) {
            score++;
        }
    }

    localStorage.setItem("examScore", score);
    localStorage.setItem("totalQuestions", 5);

    window.location.href = "result.html";
});