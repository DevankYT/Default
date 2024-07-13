// Get the form element
const form = document.getElementById('enroll-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Redirect to thank-you.html
  window.location.href = 'thank-you3.html';
});