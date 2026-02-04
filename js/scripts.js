// Smooth scrolling for anchor links (if browser doesn't support scroll-behavior: smooth in CSS)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Close mobile menu if open
            const navLinks = document.getElementById('nav-links');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar Hide/Show on Scroll logic removed to keep it fixed as per user request.

// Project Filtering Logic
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.btn-filter');

    // Update active button state in the Projects section
    buttons.forEach(btn => {
        btn.classList.remove('active');
        const text = btn.innerText.toLowerCase();
        if (category === 'all' && text.includes('todos')) btn.classList.add('active');
        if (category === 'dev' && text.includes('desarrollo')) btn.classList.add('active');
        if (category === 'data' && text.includes('datos')) btn.classList.add('active');
    });

    // Filter cards
    projects.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (category === 'all' || cardCategory === category) {
            card.classList.remove('hidden');
        } else {
            card.classList.add('hidden');
        }
    });
}

// Hero Button Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const btnDev = document.getElementById('hero-btn-dev');
    const btnData = document.getElementById('hero-btn-data');

    if (btnDev) {
        btnDev.addEventListener('click', (e) => {
            e.preventDefault();
            filterProjects('dev');
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }

    if (btnData) {
        btnData.addEventListener('click', (e) => {
            e.preventDefault();
            filterProjects('data');
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
