let password = document.getElementById('password');
let confirmation = document.getElementById('confirmation');
let error = document.getElementById('error-text');

password.addEventListener('input', compare);
confirmation.addEventListener('input', compare);

function compare() {
  if (password.value != confirmation.value) {
    error.classList.add('error');
    password.classList.add('red-border');
    confirmation.classList.add('red-border');
  } else if (password.value == confirmation.value) {
    error.classList.remove('error');
    password.classList.remove('red-border');
    confirmation.classList.remove('red-border');
  }
}
