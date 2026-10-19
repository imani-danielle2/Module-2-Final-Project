

const banner = document.getElementById('banner');
const form = document.getElementById('signup-form');
const thankYou = document.getElementById('thank-you');
const header = document.getElementById("header1");

const bodyText = document.querySelector(".body"); 

banner.style.display= "flex";
banner.style.justifyContent = "center";
banner.style.alignItems = "center";

header.style.display= "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.border= "black";


form.style.display= "flex";
banner.style.justifyContent = "center";
banner.style.alignItems = "center";
form.style.alignContent= "center";

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
      thankYou.style.color= "green";
    } else {
      alert('Something went wrong. Please try again.');
    }
  });
}