const requestTimeOffHandler = async (event) => {
    event.preventDefault();
  
  // Collect values from the time off form
  const startDate = document.querySelector('#startTimeoffDate').value.trim();
  console.log(startDate)
  const endDate = document.querySelector('#endTimeoffDate').value.trim();
  console.log(endDate)
  const hoursUsed = document.querySelector('#hoursUsed').value.trim();
  console.log(hoursUsed)

  if (startDate && endDate && hoursUsed) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/timeOff/', {
      method: 'POST',
      body: JSON.stringify({ startDate, endDate, hoursUsed }),
      headers: { 'Content-Type': 'application/json' },
    });
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
  .querySelector('.timeOff-form')
  .addEventListener('submit', requestTimeOffHandler);
    