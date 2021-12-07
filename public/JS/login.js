console.log('connected to login.js')

const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  // console.log(email);
  const password = document.querySelector('#password-login').value.trim();
  // console.log(password);

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employee/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // console.log("request sent")

    if (response.ok) {
      console.log('successful');
      // If successful, redirect the browser to the profile page
      document.location.assign('/');
    } else {
        console.log("fail");
      alert(response.statusText);
      
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);