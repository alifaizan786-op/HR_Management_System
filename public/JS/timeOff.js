const requestTimeOffHandler = async (event) => {
    event.preventDefault();
  
  // Collect values from the time off form
  const startDate = document.querySelector('#startTimeoffDate').value.trim();
  const endDate = document.querySelector('#endTimeoffDate').value.trim();
  const hoursUsed = document.querySelector('#hoursUsed').value.trim();

  if (startDate && endDate && hoursUsed) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/employee/timeoffappr', {
      method: 'POST',
      body: JSON.stringify({ startDate, endDate, hoursUsed }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        console.log('PTO hours reduced');
      } else {
        console.log("fail");
        alert(response.statusText);
      }
    }
};
    