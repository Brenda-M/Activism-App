// storing input from register-form
function registerUser() {
  // Get input references
  const name = $('#registername');
  const pw = $('#pw');
  const email = $('#registeremail');

  // Create an object with the user details to register
  const userToRegister = {
    email: email.val(),
    name: name.val(),
    password: pw.val()
  };

  // Get the existing user array
  const users = localStorage.getItem('users');

  // Check if the user array exists
  if (!users) {
    // Create our array of users and add the newly registered user
    const userArray = [];
    userArray.push(userToRegister);

    // Save the array in local storage
    // We need to stringify the data, otherwise it will be stored as [object Object]
    localStorage.setItem('users', JSON.stringify(userArray));
  } else {
    // Since the user array exists, parse the json data to convert it to an array
    const userArray = JSON.parse(users);

    // Save the array in local storage after stringifying
    userArray.push(userToRegister);
    localStorage.setItem('users', JSON.stringify(userArray));
  }

  alert('Welcome to the movement, your Details have been recorded');

  // Redirect to the login page
  return window.location.href = 'userlogin.html';
}

// check if stored data from register-form is equal to entered data in the   login-form
function loginUser() {
  // Get input references
  const name = $('#userName');
  const pw = $('#userPw');

  // Get the array of users from local storage
  const users = localStorage.getItem('users');
  console.log(users);

  // Check if the user array exists
  if (!users) {
    alert('There are no registered users. Please sign up.');

    return window.location.href = 'usersignup.html';
  } else {
    // Convert the json string to an array
    const userArray = JSON.parse(users);

    // Check if the user exists in the array
    const user = userArray.find((function(u) {
      return u.name === name.val();
    }));

    if (!user) {
      alert('That user does not exist. Please sign up.');
    } else {
      // Check if passwords match
      if (user.password === pw.val()) {
        alert('Congratulations. You Have Been Logged In');

        return window.location.href = 'index.html';
      } else {
        alert('Passwords do not match');
      }
    }
  }
}
