const form = document.getElementById('signup-form');

const thankYou = document.getElementById('thank-you');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.style.display = 'none';
  thankYou.style.display = 'block';
});