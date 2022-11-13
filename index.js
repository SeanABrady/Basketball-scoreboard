let homeScore = 0
let guestScore = 0
let homeScoreDiv = document.getElementById("home-score")
let guestScoreDiv = document.getElementById("guest-score")
let winner = "It's a draw 🥈🥈"

function homePlusOne() {
    homeScore += 1
    updateScore()
}

function homePlusTwo() {
    homeScore += 2
    updateScore()
}

function homePlusThree() {
    homeScore += 3
    updateScore()
}

function guestPlusOne() {
    guestScore += 1
    updateScore()
}

function guestPlusTwo() {
    guestScore += 2
    updateScore()
}

function guestPlusThree() {
    guestScore += 3
    updateScore()
}

function updateScore() {
    homeScoreDiv.textContent = homeScore
    guestScoreDiv.textContent = guestScore
    if (homeScore > guestScore) {
        homeScoreDiv.style.border = "thick solid gold"
        guestScoreDiv.style.border = "none"
        winner = "Home wins! 🏆"
    } else if (guestScore > homeScore) {
        guestScoreDiv.style.border = "thick solid gold"
        homeScoreDiv.style.border = "none"
        winner = "Guest wins! 🏆"
    } else {
        homeScoreDiv.style.border = "none"
        guestScoreDiv.style.border = "none"
        winner = "It's a draw 🥈🥈"
    }
}

function declareWinner() {
    document.getElementById("winner-txt").textContent = winner
}

function reset() {
    homeScore = 0
    guestScore = 0
    updateScore()
    document.getElementById("winner-txt").textContent = ""
}