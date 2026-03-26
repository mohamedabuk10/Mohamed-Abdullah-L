// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Typing Effect
const text = "Electronics Engineer specializing in IoT systems, AI-based circuit analysis, and secure embedded device development.";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

window.onload = typeEffect;


window.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".reveal");

    elements.forEach(element => {
        let position = element.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            element.classList.add("active");
        }
    });
});
