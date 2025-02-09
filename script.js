let points = 0; // Initialize GM points

function login() {
    let username = document.getElementById("username").value;
    if (username) {
        localStorage.setItem("gm_username", username);
        localStorage.setItem("gm_points", points);
        document.getElementById("login-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        document.getElementById("user-name").innerText = username;
        document.getElementById("points").innerText = points;
    } else {
        alert("Please enter a username.");
    }
}

function startMinigames() {
    // Hide the game container, show the minigames selection
    document.getElementById("game-container").style.display = "none";
    document.getElementById("minigames-container").style.display = "block";
}

function selectDifficulty(difficulty) {
    // Hide minigame selection and display the chosen game
    document.getElementById("minigames-container").style.display = "none";
    alert(`You selected ${difficulty} difficulty`);

    // Start the selected game based on difficulty level
    // For simplicity, we’ll just show the games and let the user choose one.
    document.getElementById("tic-tac-toe").style.display = "block";
    document.getElementById("snake-game").style.display = "block";
    document.getElementById("checkers-game").style.display = "block";
}

function returnToGame() {
    document.getElementById("minigames-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}

function returnToMinigames() {
    document.getElementById("tic-tac-toe").style.display = "none";
    document.getElementById("snake-game").style.display = "none";
    document.getElementById("checkers-game").style.display = "none";
    document.getElementById("minigames-container").style.display = "block";
}

function startTicTacToe() {
    // Placeholder for starting Tic-Tac-Toe game
    alert("Starting Tic-Tac-Toe game (coming soon!)");
    endGame('easy');  // Add points for winning the game based on difficulty (for now)
}

function startSnakeGame() {
    // Placeholder for starting Snake game
    alert("Starting Snake game (coming soon!)");
    endGame('medium');  // Add points for winning the game based on difficulty (for now)
}

function startCheckersGame() {
    // Placeholder for starting Checkers game
    alert("Starting Checkers game (coming soon!)");
    endGame('hard');  // Add points for winning the game based on difficulty (for now)
}

function endGame(difficulty) {
    let pointsToAdd = 0;

    if (difficulty === 'easy') {
        pointsToAdd = 2;  // Easy level = 2 GM points
    } else if (difficulty === 'medium') {
        pointsToAdd = 6;  // Medium level = 6 GM points
    } else if (difficulty === 'hard') {
        pointsToAdd = 20; // Hard level = 20 GM points
    }

    points += pointsToAdd;
    localStorage.setItem("gm_points", points);
    document.getElementById("points").innerText = points;
    alert(`You won! You earned ${pointsToAdd} GM points!`);
}

function redeemPage() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("redeem-container").style.display = "block";
}

function redeemFreeFire() {
    fakeRedemption("Free Fire Diamonds", 10, 100);
}

function redeemPUBG() {
    fakeRedemption("PUBG UC", 50, 60);
}

function redeemCODM() {
    fakeRedemption("CODM CP", 500, 80);
}

function redeemGooglePlay() {
    fakeRedemption("Google Play Gift Card", 1000, 5);
}

function fakeRedemption(game, pointsRequired, minAmount) {
    let redemptionPoints = points;
    if (redemptionPoints < pointsRequired) {
        alert(`You don't have enough points for ${game}. Minimum required is ${pointsRequired} GM points.`);
        return;
    }

    let randomOutcome = Math.random() > 0.4;  // 40% success chance for all games
    if (randomOutcome) {
        alert(`${game} Sent! Success!`);
    } else {
        alert(`Failed to purchase item. System down. Please try again later.`);
    }
    points -= pointsRequired;  // Deduct points from user
    document.getElementById("points").innerText = points;
}

function backToGame() {
    document.getElementById("redeem-container").style.display = "none";
    document.getElementById("game-container").style.display = "block";
}
