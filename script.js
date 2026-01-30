const form = document.querySelector('#subscription-form');

if(form) {

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const emailInput = form.querySelector('#email');
        const errorMessage = form.querySelector('#email-error');

        if(!validateEmail(emailInput.value)) {
            emailInput.classList.add('validation-error');
            errorMessage.classList.remove('hidden');
        }
        else {
            emailInput.classList.remove('validation-error');
            errorMessage.classList.add('hidden');
            form.submit();
        }
    
    });

}

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}