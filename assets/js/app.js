// Function to safely add listeners without crashing the script
function setupLink(id, url) {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", function() {
            window.location.href = url;
        });
    }
}

// Featured Projects
setupLink("tide-code-btn", "https://github.com/VansiluKodikara/Tide-Pomodoro-Timer");
setupLink("bookrent-code-btn", "https://github.com/VansiluKodikara/BookRentalManagementSystem");
setupLink("thogakade-pos-btn", "https://github.com/VansiluKodikara/ThogakadePracticeProject");

// Grid Projects
setupLink("test-api-1-btn", "https://github.com/VansiluKodikara/Test-API");
setupLink("test-api-2-btn", "https://github.com/VansiluKodikara/Test-API-2");
setupLink("thogakade-pos-grid-btn", "https://github.com/VansiluKodikara/ThogakadePracticeProject");
setupLink("bookrent-grid-btn", "https://github.com/VansiluKodikara/BookRentalManagementSystem");
setupLink("weatherfinder-code-btn", "https://github.com/VansiluKodikara/Weather-application");
setupLink("tide-grid-btn", "https://github.com/VansiluKodikara/Tide-Pomodoro-Timer");

// Contacts
setupLink("portfolio-btn", "https://vansilukodikara.vercel.app/");
setupLink("email-btn", "mailto:kodikaravansilu@gmail.com");
setupLink("linkedin-btn", "https://www.linkedin.com/in/vansilu-kodikara-a3124b372/");
setupLink("github-btn", "https://github.com/VansiluKodikara");