// Challenge List
const challenges = [
    "Reduce plastic use for a day! 🛍️",
    "Turn off lights when not needed 💡",
    "Use a reusable water bottle today! 🚰",
    "Bike or walk instead of driving 🚲",
    "Try a plant-based meal 🌱",
];

// Current progress (out of 5 challenges)
let progress = 0;

// Function to Show New Challenge
function newChallenge() {
    const challengeText = document.getElementById("challenge");
    const randomIndex = Math.floor(Math.random() * challenges.length);

    // Fade-out effect
    challengeText.style.opacity = 0;

    setTimeout(() => {
        challengeText.innerText = challenges[randomIndex];
        challengeText.style.opacity = 1;
    }, 400);

    // Update Progress Bar
    if (progress < 100) {
        progress += 20;
        document.getElementById("progressBar").style.width = progress + "%";
    }
}
