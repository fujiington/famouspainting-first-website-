document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptAllButton = document.getElementById("accept-all");
    const acceptMinimalButton = document.getElementById("accept-minimal");
    const declineCookiesButton = document.getElementById("decline-cookies");

    if (!localStorage.getItem("cookieChoice")) {
        overlay.style.display = "block"; 
        cookiePopup.style.display = "block";
    }

    acceptAllButton.addEventListener("click", function () {
        localStorage.setItem("cookieChoice", "all");
        applyCookiePreference("all");
        cookiePopup.style.display = "none";
        overlay.style.display = "none";
    });

    acceptMinimalButton.addEventListener("click", function () {
        localStorage.setItem("cookieChoice", "minimal");
        applyCookiePreference("minimal");
        cookiePopup.style.display = "none";
        overlay.style.display = "none"; 
    });

    declineCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookieChoice", "declined");
        applyCookiePreference("declined");
        cookiePopup.style.display = "none";
        overlay.style.display = "none"; 
        window.location.href = "https://en.wikipedia.org/wiki/Cookie_Monster";
    });

    function applyCookiePreference(choice) {
        switch (choice) {
            case "all":
                console.log("All cookies enabled.");
                break;
            case "minimal":
                console.log("Only necessary cookies enabled.");
                break;
            case "declined":
                console.log("Cookies declined.");
        }
    }
});