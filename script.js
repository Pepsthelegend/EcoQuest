// Challenge List (Kilifi-Specific)
const challenges = [
    "Join a beach clean-up at Bofa Beach 🏖️",
    "Use a reusable shopping bag at Kilifi Market 🛍️",
    "Turn off your water tap while brushing 🚰",
    "Try a meal with locally sourced ingredients 🍛",
    "Use a tuk-tuk or walk instead of a car 🚶‍♂️",
    "Recycle plastic waste at a collection center ♻️",
    "Plant a tree at a community space 🌳",
    "Support a local eco-friendly business 🛒",
    "Use solar power where possible ☀️",
    "Avoid using single-use plastics for a day 🚯"
];

// Track user progress and completed challenges
let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;
let completedChallenges = JSON.parse(localStorage.getItem("completedChallenges")) || [];
let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0;
let streak = localStorage.getItem("streak") ? parseInt(localStorage.getItem("streak")) : 0;
let lastCompletedDate = localStorage.getItem("lastCompletedDate") ? new Date(localStorage.getItem("lastCompletedDate")) : null;

// Function to Show New Challenge
function newChallenge() {
    const challengeText = document.getElementById("challenge");
    let availableChallenges = challenges.filter(challenge => !completedChallenges.includes(challenge));
    
    if (availableChallenges.length === 0) {
        challengeText.innerText = "You've completed all challenges! 🎉 Great job!";
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    const selectedChallenge = availableChallenges[randomIndex];

    // Fade-out effect before updating text
    challengeText.style.opacity = 0;
    setTimeout(() => {
        challengeText.innerText = selectedChallenge;
        challengeText.style.opacity = 1;
    }, 400);
}

// Function to Complete a Challenge
function completeChallenge() {
    const challengeText = document.getElementById("challenge").innerText;
    if (!completedChallenges.includes(challengeText) && challenges.includes(challengeText)) {
        completedChallenges.push(challengeText);
        localStorage.setItem("completedChallenges", JSON.stringify(completedChallenges));
        
        if (progress < 100) {
            progress += 10;
            document.getElementById("progressBar").style.width = progress + "%";
            localStorage.setItem("progress", progress);
        }
        
        // Update points
        points += 10;
        localStorage.setItem("points", points);
        document.getElementById("pointsDisplay").innerText = `Points: ${points}`;

        // Update streak
        let today = new Date();
        if (lastCompletedDate) {
            let timeDiff = today.getTime() - lastCompletedDate.getTime();
            let daysDiff = timeDiff / (1000 * 3600 * 24);
            if (daysDiff < 2) {
                streak++;
            } else {
                streak = 1;
            }
        } else {
            streak = 1;
        }
        lastCompletedDate = today;
        localStorage.setItem("streak", streak);
        localStorage.setItem("lastCompletedDate", lastCompletedDate.toISOString());
        document.getElementById("streakDisplay").innerText = `Streak: ${streak} days`;

        // Check for badges
        checkBadges();
    }
    newChallenge();
}

// Function to Check Badges
function checkBadges() {
    let badgeMessage = "";
    if (completedChallenges.length === 1) badgeMessage = "🏅 Eco Starter: Completed 1 challenge!";
    if (completedChallenges.length === 5) badgeMessage = "🥈 Green Warrior: Completed 5 challenges!";
    if (completedChallenges.length === 10) badgeMessage = "🏆 Sustainability Hero: Completed 10 challenges!";
    
    if (badgeMessage) {
        alert(badgeMessage);
    }
}

// Load stored progress on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("progressBar").style.width = progress + "%";
    document.getElementById("pointsDisplay").innerText = `Points: ${points}`;
    document.getElementById("streakDisplay").innerText = `Streak: ${streak} days`;
    newChallenge();
});
