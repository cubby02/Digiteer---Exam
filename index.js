/* 
    this code block is for checking if the section is intersecting upon scrolling
    it adds hide and show animations upon scrolling
*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

//change the background of Nav Bar
const btnChangeNavBg = document.getElementById('navMenu');
btnChangeNavBg.addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('navSmallScreen');

});

//scroll events
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const elements = ['navBrand', 'navHome', 'navAbout', 'navServices', 'navInsights', 'navMenu'];
    const achievementWrapper = document.getElementsByClassName('achievement_wrapper')[0];

    //toggle the scrolled class in navbar (changes the background color)
    nav.classList.toggle('scrolled', window.scrollY > 0);

    //this is to remove the show class when scrolled back to top
    hiddenElements.forEach((el) => {
        if(window.scrollY === 0){
            el.classList.remove('show');
        }
    });

    //when scrolled, the font color of nav bar items will change
    elements.forEach((elementId) => {
        const element = document.getElementById(elementId);
        element.classList.toggle('text-white', window.scrollY === 0);
        element.classList.toggle('navBrandColor', window.scrollY > 0);
    });

    if(window.scrollY === 0){
        //changes the src of navbar logo to white
        document.getElementById('navBrandLogo').src = '/assets/images/logo-only.png';

        //animates the about/achievement div
        achievementWrapper.classList.add('hide_achievement');
        achievementWrapper.classList.remove('show_achievement');
    } else {
        //changes the src of navbar logo to colored
        document.getElementById('navBrandLogo').src = 'assets/images/logo-only-colored.png';

        //animates the about/achievement div
        achievementWrapper.classList.remove('hide_achievement');
        achievementWrapper.classList.add('show_achievement');
    }
});

//shows alert upon succesful validation of the user input
function show_alert() {
    const txtFirstName = document.getElementById('txtFirstName');
    const txtLasttName = document.getElementById('txtLasttName');
    const txtEmail = document.getElementById('txtEmail');
    const error_elements = ['fnError','lnError','emailError'];
    const notEmail = document.getElementById('notEmail');

    if (isNotEmpty(txtFirstName.value) && isNotEmpty(txtLasttName.value) &&isNotEmpty(txtEmail.value) ){
        if(isEmail(txtEmail.value)) {
            notEmail.style.display = 'none';
            txtEmail.classList.remove('field_error');

            alert('First Name: ' + txtFirstName.value + " " + txtLasttName.value + "\nEmail: " + txtEmail.value); 

            txtFirstName.value = '';
            txtLasttName.value = '';
            txtEmail.value = '';
              
        } else {
            txtFirstName.classList.remove('field_error');
            txtLasttName.classList.remove('field_error');

            error_elements.forEach((elementId) => {
                const element = document.getElementById(elementId);
                element.style.display = 'none';
            });

            notEmail.style.display = 'block';
            txtEmail.classList.add('field_error');
        }
    } else {
        error_elements.forEach((elementId) => {
            const element = document.getElementById(elementId);
            element.style.display = 'block';
        });

        txtFirstName.classList.add('field_error');
        txtLasttName.classList.add('field_error');
        txtEmail.classList.add('field_error');
    }
    

}

//checks if the field is empty
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

//check if the the user input is a valid email
function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0;
    
    setTimeout(function() { 
        window.location.href = href;
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1;
});