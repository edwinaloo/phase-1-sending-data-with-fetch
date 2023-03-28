function submitData(name, email) {
    const url = "http://localhost:3000/users";
    const data = {
      name: name,
      email: email
    };
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, config)
      .then(response => response.json())
      .then(data => {
        const id = data.id;
        const container = document.querySelector("#response-container");
        container.innerHTML = `New user created with id ${id}`;
        return data;
      })
      .catch(error => {
        const container = document.querySelector("#response-container");
        container.innerHTML = `Error: ${error.message}`;
        return error;
      });
  }
  
  document.querySelector("#submit-button").addEventListener("click", function() {
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    submitData(name, email);
  });
   
// Add your code here
