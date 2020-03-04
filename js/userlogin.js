// Name and Password from the register-form
var name = document.getElementById('registername');
var pw = document.getElementById('pw');

// storing input from register-form
function store() {
    localStorage.setItem('signupname', registername.value);
    localStorage.setItem('passkey', pw.value);
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('signupname');
    var storedPw = localStorage.getItem('passkey');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
  if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}
