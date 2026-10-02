/* =========================================
   MOBILE NAVIGATION
========================================= */
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('nav a');
// Mobile menu toggle
if (menu && navbar) {
    menu.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        const isOpen =
            navbar.classList.contains('nav-open');
        menu.setAttribute(
            'aria-expanded',
            isOpen
        );
        if (isOpen) {
            menu.innerHTML = '✕';
            menu.setAttribute(
                'aria-label',
                'Close menu'
            );
        } else {

            menu.innerHTML = '☰';

            menu.setAttribute(
                'aria-label',
                'Open menu'
            );

        }

    });

}
// Close menu when navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        menu.innerHTML = '☰';
        menu.setAttribute(
            'aria-expanded',
            'false'
        );
        menu.setAttribute(
            'aria-label',
            'Open menu'
        );
    });
});
/* =========================================
   AUTOMATIC COPYRIGHT YEAR
========================================= */
const year = document.getElementById('year');
if (year) {
    year.textContent =
        new Date().getFullYear();
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
            /* Number of dots */
            number: {
                value: 70,
                density: {
                    enable: true,
                    value_area: 900
                }

            },


            /* Dot color */

            color: {

                value: '#64748b'

            },


            /* Dot shape */

            shape: {
                type: 'circle'
            },

            /* Dot transparency */
            opacity: {
                value: 0.35,
                random: true
            },

            /* Dot size */

            size: {

                value: 3,

                random: true

            },
            /* Connecting lines */

            line_linked: {

                enable: true,

                distance: 150,

                color: '#94a3b8',

                opacity: 0.3,

                width: 1

            },
            /* Movement */
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
            const target =
                document.querySelector(
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
