

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
function FormSubmission() {
  const form = document.getElementById('signup-form');
  const thankYou = document.getElementById('thank-you');

  if (!form || !thankYou){
  form.addEventListener('submit', async (submitInfo) => {
    submitInfo.preventDefault(); // Stops the page from leaving

    // Sends the data quietly in the background to Formspree
    await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    // Hides the form and shows your custom thank-you div
    form.style.display = 'none';
    thankYou.style.display = 'block';
  });
}

// 2. Call the function so it runs when the page loads
FormSubmission()};