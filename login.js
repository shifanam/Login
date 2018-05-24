//  function eye() {
//      if (password.type == 'text') 
//         password.type = 'password';
//      else password.type = 'text';
//  }

// JavaScript source code
// localStorage.setItem("email", "shifa123@gmail.com");
// document.getElementById("result").innerHTML = localStorage.getItem("email");




// function for login
function logins() {

    let log_email = document.email.value;
    let log_pass = document.password.value;

    let st_email = localStorage.getItem("email");
    let st_pass = localStorage.getItem("pass");

    if(log_email == st_email && log_pass == st_pass) {
         alert('login sucessfully');
        // window.location="http://file:///home/aiesys/Desktop/project/login/dashboard.html";
        return true;
    }
    else {
         alert('Invalid email or password');
        return false;
    }

}
