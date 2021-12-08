// var dateTime = moment().format("MMM Do, YYYY, hh:mm");



const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  console.log(email);
  const password = document.querySelector('#password-login').value.trim();
  console.log(password);

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('successful');
      // If successful, redirect the browser to the profile page
      document.location.assign('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

// document
  // .querySelector('.login-form')
  // .addEventListener('submit', loginFormHandler);

// $(".dateTime").text(dateTime);

// console.log(dateTime)

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.dropdown-trigger');
  // var instances = M.Dropdown.init(elems, options);
});