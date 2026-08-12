let backToTopBtn = document.getElementById("back-to-top-btn");

window.onscroll = function () {
    scrollFunction();
};

backToTopBtn.addEventListener("click", backToTopFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

function backToTopFunction() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function setupLink(id, url) {
    const button = document.getElementById(id);
    if (button) {
        button.addEventListener("click", function () {
            window.location.href = url;
        });
    }
}


setupLink("download-btn", "https://drive.google.com/file/d/1TsJT_7IiYDbyf3IV78XT-KQUvxMK9ro0/view?usp=sharing");


setupLink("tide-code-btn", "https://github.com/VansiluKodikara/Tide-Pomodoro-Timer");
setupLink("bookrent-code-btn", "https://github.com/VansiluKodikara/BookRentalManagementSystem");
setupLink("thogakade-pos-btn", "https://github.com/VansiluKodikara/ThogakadePracticeProject");


setupLink("test-api-1-btn", "https://github.com/VansiluKodikara/Test-API");
setupLink("test-api-2-btn", "https://github.com/VansiluKodikara/Test-API-2");
setupLink("test-api-3-btn", "https://github.com/VansiluKodikara/Test-API-3")
setupLink("thogakade-pos-grid-btn", "https://github.com/VansiluKodikara/ThogakadePracticeProject");
setupLink("bookrent-grid-btn", "https://github.com/VansiluKodikara/BookRentalManagementSystem");
setupLink("weatherfinder-code-btn", "https://github.com/VansiluKodikara/Weather-application");
setupLink("tide-grid-btn", "https://github.com/VansiluKodikara/Tide-Pomodoro-Timer");


setupLink("portfolio-btn", "https://vansilukodikara.vercel.app/");
setupLink("email-btn", "mailto:kodikaravansilu@gmail.com");
setupLink("linkedin-btn", "https://www.linkedin.com/in/vansilu-kodikara-a3124b372/");
setupLink("github-btn", "https://github.com/VansiluKodikara");
