// JavaScript source code
// localStorage.setItem("email", "shifa123@gmail.com");
// document.getElementById("result").innerHTML = localStorage.getItem("email");

// function eye() {
//     if (password.type == 'text') 
//        password.type = 'password';
//     else password.type = 'text';
// }

// function for signup

function form_validation() {
    var email = document.email.value;  
    var password = document.password.value;   
    pass_val(password);
    email_val(email);
    // console.log(email);
     store(email,password);
}

function email_val(email) {
    // alert("haii");
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)) {
        return true;
    }

    else{
        alert("Enter valid email!..");
        return false;
    }
}

function pass_val(password) {
    let passformat = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/;
    if(password.match(passformat)) {
        return true;
    }
    else {
        alert("Password should contain :atleast 1 alphabet,digit,special character and total 8-16 characters!..")
        return false;
    }
}

function store(email,password) {
    localStorage.setItem("email", email); 
    localStorage.setItem("pass", password);
    
}


function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
