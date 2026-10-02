const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('nav a');
// Mobile menu toggle
menu.addEventListener('click', () => {
navbar.classList.toggle('nav-open');
const isOpen = navbar.classList.contains('nav-open');

menu.setAttribute('aria-expanded', isOpen);

if (isOpen) {
    menu.innerHTML = '✕';
    menu.setAttribute('aria-label', 'Close menu');
} else {
    menu.innerHTML = '☰';
    menu.setAttribute('aria-label', 'Open menu');
}
});
// Close menu when a navigation link is clicked
navLinks.forEach(link => {
link.addEventListener('click', () => {
navbar.classList.remove('nav-open');
    menu.innerHTML = '☰';
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open menu');
});
});
// Automatically update copyright year
// Update footer year
const year = document.getElementById('year');
if (year) {
    year.textContent = new Date().getFullYear();
}
