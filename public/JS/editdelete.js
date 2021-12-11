console.log('connected to editdelet.js')

const deleteEmpHandler = async (event) => {
    event.preventDefault();
    console.log('working')
    const id = document.querySelector('#empid').value.trim();
    console.log(id)


    if (id) {
      // Send a POST request to the API endpoint
      const response = await fetch(`/api/employee/${id}`, {
        method: 'DELETE',
      });
  
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
  .querySelector('#deleteemployee')
  .addEventListener('click', deleteEmpHandler);
