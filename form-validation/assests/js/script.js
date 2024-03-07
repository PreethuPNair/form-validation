document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const password = document.getElementById('password').value;
    
    if (!name) {
      alert('Name cannot be empty!');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Invalid email address!');
      return;
    }
    
    if (isNaN(age) || age <= 0 || !Number.isInteger(parseFloat(age))) {
      alert('Age must be a positive integer!');
      return;
    }
    
    if (password.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    
    // If all validations pass, you can proceed with form submission
    alert('Form submitted successfully!');
  });
  