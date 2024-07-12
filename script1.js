const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // Send the form data to your server-side script or API
  fetch('/register', {
    method: 'POST',
    body: formData
  })
 .then((response) => response.json())
 .then((data) => 
    function redirectThankYou() {
    console.log(data);
    // Redirect to thank-you page
    window.location.href = 'thank-you.html';
  })
 .catch((error) => {
    console.error(error);
    // Display an error message
  });
});