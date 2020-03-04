// Name and Password from the register-form
var name = document.getElementById('registername');
var pw = document.getElementById('pw');

// storing input from register-form

  function store() {


    localStorage.setItem('registername', registername.value);
    localStorage.setItem('pw', pw.value);
    alert('Welcome to the movement, your Details have been recorded');

  }

  function disableproceed() {
  document.getElementById("next1").disabled = true;
}




// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('registername');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
  if(userName.value == storedName && userPw.value == storedPw) {
    alert('Congratulations.You Have Been Logged In');

    }else {
        alert('Wrong username or password.Kindly countercheck and try again');
        function disableproceed() {
        document.getElementById("next1").disabled = true;
      }
      disableproceed();
    }
}
