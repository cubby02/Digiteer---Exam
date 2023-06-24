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

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
}
