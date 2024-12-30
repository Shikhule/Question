// Get the buttons by their IDs
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");

// Check if elements exist before proceeding
if (noButton && yesButton) {
    // Array for "No" button text changes
    const noTexts = [
        "No",
        "Is that so?",
        "I beg your pardon?",
        "No way, just say that.",
        "You're joking, right?"
    ];
    
    let noTextIndex = 0;
    
    // Handle the "No" button shrinking and text changes
    noButton.addEventListener("click", function () {
        if (noTextIndex < noTexts.length - 1) {
            noTextIndex++;
            noButton.textContent = noTexts[noTextIndex];
        } else {
            noButton.style.display = "none"; // Hide the "No" button after final text
        }
        
        // Shrink the "No" button
        noButton.style.transform = "scale(0.7)";
        noButton.style.transition = "transform 0.3s ease";
        
        // Expand the "Yes" button
        yesButton.style.transform = "scale(1.5)";
        yesButton.style.transition = "transform 0.3s ease";
    });
    
    // Handle the "Yes" button click to go to the next page
    yesButton.addEventListener("click", function () {
        window.location.href = "index2.html";
    });
} else {
    console.error("Button elements not found!");
}