// Add your code here
function submitData(name, email) {
  
    // insert in body
    // const formData = {
    //   name : name, 
    //   email : email,
    // };
    
    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email : email,
        }),
      };
      
      return fetch("http://localhost:3000/users", configurationObject)
      .then(response => response.json())
      .then(object => document.querySelector('body').textContent = object.id)
      .catch(error => document.querySelector('body').textContent = error.message);
    
}

submitData('Omar','James');

