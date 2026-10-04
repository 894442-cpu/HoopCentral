// Takes you to the players section
function goToPlayers() {
    document.getElementById("players").scrollIntoView({
        behavior: "smooth"
    });
}


// Player information
let players = [
    {
        name: "LeBron James",
        team: "Los Angeles Lakers",
        position: "Forward",
        fact: "LeBron is one of the highest scoring players in NBA history and has won 4 championships."
    },
    {
        name: "Stephen Curry",
        team: "Golden State Warriors",
        position: "Guard",
        fact: "Curry is one of the greatest three-point shooters in NBA history and has won 4 championships."
    },
    {
        name: "Michael Jordan",
        team: "Chicago Bulls",
        position: "Guard",
        fact: "Jordan won 6 NBA championships with the Chicago Bulls and was a 6-time Finals MVP."
    }
];


// Shows more information about a player
function showPlayer(number) {

    let player = players[number];

    let info = document.getElementById("player-info");

    info.innerHTML =
        "<h3>" + player.name + "</h3>" +
        "<p><strong>Team:</strong> " + player.team + "</p>" +
        "<p><strong>Position:</strong> " + player.position + "</p>" +
        "<p>" + player.fact + "</p>";
}


// Sets up the quiz
let score = 0;
let currentQuestion = 0;

let questions = [
    {
        question: "Which player has scored the most points in NBA history?",
        answers: ["LeBron James", "Michael Jordan", "Stephen Curry"],
        correct: "LeBron James"
    },
    {
        question: "Which player has the most NBA championships?",
        answers: ["LeBron James", "Michael Jordan", "Stephen Curry"],
        correct: "Michael Jordan"
    },
    {
        question: "Which player is known for popularizing the three-point shot?",
        answers: ["LeBron James", "Michael Jordan", "Stephen Curry"],
        correct: "Stephen Curry"
    },
    {
        question: "Which team does LeBron James play for?",
        answers: ["Lakers", "Bulls", "Warriors"],
        correct: "Lakers"
    },
    {
        question: "How many championships did Michael Jordan win?",
        answers: ["4", "6", "8"],
        correct: "6"
    }
];


// Checks the quiz answer
function checkAnswer(button) {

    let answer = button.textContent;
    let result = document.getElementById("quiz-result");

    if (answer === questions[currentQuestion].correct) {
        result.textContent = "Correct!";
        score = score + 1;
    } else {
        result.textContent = "Not quite!";
    }

    document.getElementById("score").textContent =
        "Score: " + score;

    document.getElementById("next-button").style.display = "block";
}


// Moves to the next question
function nextQuestion() {

    currentQuestion = currentQuestion + 1;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question").textContent =
            "Quiz complete!";

        document.getElementById("quiz-result").textContent =
            "Final Score: " + score + "/5";

        document.getElementById("next-button").style.display = "none";
        document.getElementById("restart-button").style.display = "block";
    }
}


// Shows the current question
function showQuestion() {

    let question = questions[currentQuestion];

    document.getElementById("question").textContent =
        question.question;

    let buttons = document.querySelectorAll(".answer-button");

    buttons[0].textContent = question.answers[0];
    buttons[1].textContent = question.answers[1];
    buttons[2].textContent = question.answers[2];

    document.getElementById("quiz-result").textContent = "";

    document.getElementById("next-button").style.display = "none";
}


// Restarts the quiz
function restartQuiz() {

    score = 0;
    currentQuestion = 0;

    document.getElementById("restart-button").style.display = "none";

    document.getElementById("score").textContent =
        "Score: 0";

    showQuestion();
}


// Calculates basketball stats
function calculateStats() {

    let points = Number(document.getElementById("points").value);
    let rebounds = Number(document.getElementById("rebounds").value);
    let assists = Number(document.getElementById("assists").value);
    let games = Number(document.getElementById("games").value);

    let result = document.getElementById("stats-result");

    if (games <= 0 || points < 0 || rebounds < 0 || assists < 0) {
        result.textContent = "Please enter valid numbers.";
        return;
    }

    let ppg = points / games;
    let rpg = rebounds / games;
    let apg = assists / games;

    result.textContent =
        "PPG: " + ppg.toFixed(1) +
        " | RPG: " + rpg.toFixed(1) +
        " | APG: " + apg.toFixed(1);
}