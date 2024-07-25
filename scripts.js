document.addEventListener("DOMContentLoaded", () => {
    // Navbar Scroll Effect
    window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Form Submission Handling
    const quoteForm = document.getElementById("quote-form");
    if (quoteForm) {
        quoteForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Quote request submitted successfully!");
            quoteForm.reset();
        });
    }

    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();
            alert("Message sent successfully!");
            contactForm.reset();
        });
    }

    // Login Form Submission Handling
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            // You can add actual authentication logic here
            alert("Login successful!");
            window.location.href = "dashboard.html";
        });
    }

    // Registration Form Submission Handling
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", (event) => {
            event.preventDefault();
            // You can add actual registration logic here
            alert("Registration successful!");
            registerForm.reset();
        });
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector(anchor.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero Section Animation
    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
        heroContent.classList.add("animate-hero");
    }
});

// Logout Function
function logout() {
    alert("Logout successful!");
    window.location.href = "index.html";
}


