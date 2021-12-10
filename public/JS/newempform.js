console.log('connected to newempform.js')

const newempformHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const first_Name = document.querySelector('#first_name').value.trim();
    console.log(first_Name);
  const last_Name = document.querySelector('#last_name').value.trim();
    console.log(last_Name);
  const email = document.querySelector('#email').value.trim();
    console.log(email);
  const password = document.querySelector('#password').value.trim();
    console.log(password)
  const role_id = document.querySelector('#role').value.trim();
    console.log(role_id);
   const branch_id = document.querySelector('#branch').value.trim();
    console.log(branch_id);
    const privilege_Level = document.querySelector('#privilege').value.trim();
    const privilege= privilege_Level.toString();
    console.log(privilege);
    const employeeStatus = 1

  if (first_Name && last_Name && email && password && role_id && branch_id && privilege_Level && employeeStatus) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employee/newemp', {
      method: 'POST',
      body: JSON.stringify({ privilege_Level, first_Name, last_Name, password, email, role_id, branch_id, employeeStatus }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log("request sent")

    if (response.ok) {
      console.log('successful');
      // If successful, redirect the browser to the profile page
      document.location.assign('/allemp');
    } else {
      console.log("fail");
      alert(response.statusText);

    }
  }
};

document
  .querySelector('#newempform')
  .addEventListener('click', newempformHandler);