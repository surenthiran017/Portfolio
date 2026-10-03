/* =========================================
   MOBILE NAVIGATION
========================================= */

const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('nav a');

if (menu && navbar) {
    menu.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');

        const isOpen = navbar.classList.contains('nav-open');

        menu.setAttribute('aria-expanded', isOpen);
        menu.innerHTML = isOpen ? '✕' : '☰';
        menu.setAttribute(
            'aria-label',
            isOpen ? 'Close menu' : 'Open menu'
        );
    });
}

/* Close mobile menu when link is clicked */

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!navbar || !menu) return;

        navbar.classList.remove('nav-open');

        menu.innerHTML = '☰';
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open menu');
    });
});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('i');

function setTheme(theme) {
    const isDark = theme === 'dark';

    document.body.classList.toggle('dark-mode', isDark);

    if (themeIcon) {
        themeIcon.classList.toggle('fa-moon', !isDark);
        themeIcon.classList.toggle('fa-sun', isDark);
    }

    if (themeToggle) {
        themeToggle.setAttribute(
            'aria-label',
            isDark ? 'Switch to light mode' : 'Switch to dark mode'
        );

        themeToggle.setAttribute(
            'title',
            isDark ? 'Light mode' : 'Dark mode'
        );
    }

    localStorage.setItem('theme', theme);
}

/* Load saved theme */

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme('light');
}

/* Theme button */

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark =
            document.body.classList.contains('dark-mode');

        setTheme(isDark ? 'light' : 'dark');
    });
}


/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */

const year = document.getElementById('year');

if (year) {
    year.textContent = new Date().getFullYear();
}


/* =========================================
   PARTICLE / NETWORK BACKGROUND
========================================= */

if (
    typeof particlesJS !== 'undefined' &&
    document.getElementById('particles-js')
) {
    particlesJS('particles-js', {

        particles: {

            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }
            },

            color: {
                value: '#64748b'
            },

            shape: {
                type: 'circle'
            },

            opacity: {
                value: 0.35,
                random: true
            },

            size: {
                value: 3,
                random: true
            },

            line_linked: {
                enable: true,
                distance: 150,
                color: '#94a3b8',
                opacity: 0.3,
                width: 1
            },

            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },


        /* =================================
           INTERACTION
        ================================= */

        interactivity: {

            detect_on: 'canvas',

            events: {

                onhover: {
                    enable: true,
                    mode: 'grab'
                },

                onclick: {
                    enable: true,
                    mode: 'push'
                },

                resize: true
            },

            modes: {

                grab: {
                    distance: 180,

                    line_linked: {
                        opacity: 0.6
                    }
                },

                push: {
                    particles_nb: 4
                }
            }
        },


        /* Retina screens */

        retina_detect: true
    });
}
/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {

        anchor.addEventListener('click', function (event) {

            const target = document.querySelector(
                this.getAttribute('href')
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }
        });
    });
