const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animation des liens
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Animation du burger
        burger.classList.toggle('toggle');
    });
}

// Animation pour fermer le menu quand on clique sur un lien
const closeMenu = () => {
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const burger = document.querySelector('.burger');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(nav.classList.contains('nav-active')){
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
}

navSlide();
closeMenu();

