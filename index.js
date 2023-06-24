const btnChangeNavBg = document.getElementById('navMenu');
btnChangeNavBg.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('navSmallScreen');

});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const elements = ['navBrand', 'navHome', 'navAbout', 'navServices', 'navInsights', 'navMenu'];


    nav.classList.toggle('scrolled', window.scrollY > 0);

    elements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        element.classList.toggle('text-white', window.scrollY === 0);
        element.classList.toggle('navBrandColor', window.scrollY > 0);
    });

    if(window.scrollY === 0){
        document.getElementById('navBrandLogo').src = '/assets/images/logo-only.png';
    } else {
        document.getElementById('navBrandLogo').src = 'assets/images/logo-only-colored.png';
    }
});