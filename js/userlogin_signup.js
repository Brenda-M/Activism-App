// Name and Password from the register-form
var name = document.getElementById('registername');
var pw = document.getElementById('pw');

// storing input from register-form

  function store() {


    localStorage.setItem('registername', registername.value);
    localStorage.setItem('pw', pw.value);
    alert('Welcome to the movement, you are being redirected to the login page!')
  }
    function redirect() {
      // location.replace("https://www.w3schools.com");
      // window.location = "http://www.w3schools.com";
      // window.location.href = "http://www.w3schools.com";
      // window.location.assign("http://www.w3schools.com");
      window.location.replace("userlogin.html");
      alert('ok');
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
        // alert('Congratulations.You are being redirected to the homepage');
        function redirect1() {
          // location.replace("https://www.w3schools.com");
          // window.location = "http://www.w3schools.com";
          // window.location.href = "http://www.w3schools.com";
          // window.location.assign("http://www.w3schools.com");
          window.location.replace("index.html");
          alert('ok');
        }
        redirect1();


    }else {
        alert('Wrong username or password.Kindly countercheck and enter again');
    }
}
