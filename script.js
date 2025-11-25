/* ============================================================
   Pro Unit Converter — Global Script
   Features:
   ✔ Dark Mode Toggle (with saved preference)
   ✔ Auto-select result text
   ✔ Input validation helper
   ✔ Smooth fade-in animations
   ✔ Cookie Consent Banner
============================================================ */

// ---------- DARK MODE ----------
const body = document.body;
const toggleBtn = document.getElementById("darkModeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
}

// Toggle theme
if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");

        const isDark = body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";

        // Save preference
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}

// ---------- AUTO SELECT RESULT ----------
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("result-box") || e.target.id.includes("Result")) {
        const range = document.createRange();
        range.selectNodeContents(e.target);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    }
});

// ---------- VALIDATION HELPER ----------
function validateNumber(input) {
    const num = parseFloat(input);
    return isNaN(num) ? null : num;
}

// ---------- FADE-IN ANIMATION ----------
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card, .hero").forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(12px)";
        setTimeout(() => {
            el.style.transition = "0.5s ease";
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }, 150);
    });
});


// ============================================================
//  COOKIE CONSENT BANNER
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookieBanner");
    const acceptBtn = document.getElementById("acceptCookies");

    // If page doesn't have cookie banner, skip
    if (!banner || !acceptBtn) return;

    const consent = localStorage.getItem("cookie_consent");

    // Hide if already accepted
    if (consent === "accepted") {
        banner.classList.add("hide");
    }

    acceptBtn.addEventListener("click", function () {
        localStorage.setItem("cookie_consent", "accepted");
        banner.classList.add("hide");
    });
});
