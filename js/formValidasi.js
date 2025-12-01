function handleLogin(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    console.log('Nilai Email:', emailValue);
    console.log('Nilai Password:', passwordValue);
}
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('loginForm');

    if (form) {
        form.addEventListener('submit', handleLogin);
    }
});