

const banner = document.getElementById('banner');
const form = document.getElementById('signup-form');
const thankYou = document.getElementById('thank-you');
const header = document.getElementById("main-header");
const styleElement = document.createElement('style');

banner.style.display = 'flex';
banner.style.justifyContent = 'center';
banner.style.alignItems = 'center';

if (header) {
  header.style.display = 'flex';
  header.style.justifyContent = 'center';
  header.style.alignItems = 'center';
  header.style.border = '1px solid black'; 
}
if (form) {
  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.alignItems = 'center';
}

// form submission 
if (form && thankYou) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none';
      thankYou.style.display = 'block';
      thankYou.style.color = 'green';
    } else {
      alert('Something went wrong. Please try again.');
    }
  });
}