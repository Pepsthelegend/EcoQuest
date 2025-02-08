const challenges = [
    "Reduce plastic use for a day! 🛍️",
    "Turn off lights when not needed 💡",
    "Use a reusable water bottle today! 🚰",
    "Bike or walk instead of driving 🚲",
    "Try a plant-based meal 🌱",
];

function newChallenge() {
    const challengeText = document.getElementById("challenge");
    const randomIndex = Math.floor(Math.random() * challenges.length);
    challengeText.innerText = challenges[randomIndex];
}
