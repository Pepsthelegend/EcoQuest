// Challenge List with More Variety and Impact
const challenges = [
    "Reduce plastic use for a day! 🛍️",
    "Turn off lights when not needed 💡",
    "Use a reusable water bottle today! 🚰",
    "Bike or walk instead of driving 🚲",
    "Try a plant-based meal 🌱",
    "Pick up and properly dispose of 5 pieces of litter 🗑️",
    "Use a reusable shopping bag 🛒",
    "Take a 5-minute shower instead of a long one 🚿",
    "Switch off electronic devices when not in use 🔌",
    "Support a local eco-friendly business 🌍",
    "Plant a tree or care for a plant 🌳",
    "Compost your food waste today 🍂",
    "Use public transport or carpool 🚍",
    "Avoid single-use plastic cutlery 🍴",
    "Recycle at least one item ♻️",
    "Educate a friend about climate change 📢",
    "Donate old clothes instead of throwing them away 👕",
    "Take part in a local clean-up event 🏞️",
    "Use a refillable coffee cup ☕",
    "Go a full day without eating meat 🥦",
    "Turn your thermostat down by 1°C (or up in summer) 🌡️",
    "Repurpose an old item instead of buying new 🔄",
    "Upcycle something at home 🏠",
    "Write to a company asking for sustainable practices 📬",
    "Watch a documentary on environmental issues 🎥"
];

// Track challenges completed to avoid repetition
let completedChallenges = [];
let progress = localStorage.getItem("progress") ? parseInt(localStorage.getItem("progress")) : 0;

// Function to Show New Challenge
function newChallenge() {
    const challengeText = document.getElementById("challenge");
    let randomIndex;
    
    // Ensure a new challenge each time
    do {
        randomIndex = Math.floor(Math.random() * challenges.length);
    } while (completedChallenges.includes(randomIndex) && completedChallenges.length < challenges.length);
    
    // Fade-out effect
    challengeText.style.opacity = 0;
    
    setTimeout(() => {
        challengeText.innerText = challenges[randomIndex];
        challengeText.style.opacity = 1;
        completedChallenges.push(randomIndex);
        
        // Play sound effect for engagement
        playChallengeSound();
        
    }, 400);
    
    // Update Progress Bar
    if (progress < 100) {
        progress += 5;
        document.getElementById("progressBar").style.width = progress + "%";
        localStorage.setItem("progress", progress);
    }
}

// Function to Play Sound When a New Challenge Appears
function playChallengeSound() {
    const audio = new Audio("success-sound.mp3"); // Add a suitable sound file
    audio.play();
}

// Reset Function to Start Over
function resetChallenges() {
    completedChallenges = [];
    progress = 0;
    document.getElementById("progressBar").style.width = "0%";
    localStorage.setItem("progress", 0);
}
