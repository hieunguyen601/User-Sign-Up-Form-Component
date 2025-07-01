const passwordInput = document.querySelector('#password-input');
const toggleButton = document.querySelector('.show-password');

function showPassword() {

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide'
    } else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
}

toggleButton.addEventListener('click', () => {
    showPassword();
})
const buttonElement = document.querySelector('.sign-up-button');
const input = document.querySelector('#password-input');
input.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        buttonElement.click();
    }
})
