
document.getElementById('submit').addEventListener("click", function(){
    validateUserName();
    validateEmail();
    validatePassword()
})

function validateUserName() {
    const username = document.getElementById('username-error');
    const usernameInput = document.getElementById("username");
    if(usernameInput.value.length < 3) {
        username.innerHTML = "Username must be at least 3 characters";
        username.style.color = "red";
        usernameInput.style.border = "2px solid red";
    }

    else {
        username.innerHTML = "";
        usernameInput.style.border = "2px solid lightgreen";
    }
}

function validateEmail() {
    var email = document.getElementById('email-error');
    var emailInput = document.getElementById("email");
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(regex.test(emailInput.value)) {
        email.innerHTML = "";
        emailInput.style.border = "2px solid lightgreen";
    }
    else {
        email.innerHTML = "Email is not valid";
        email.style.color = "red";
        emailInput.style.border = "2px solid red";
    }
}

function validatePassword() {
    const password = document.getElementById('password-error');
    const passwordInput = document.getElementById("password");
    const reconfirmPassword = document.getElementById('reconfirm-password-error');
    const reconfirmPasswordInput = document.getElementById("reconfirm-password");

    if(passwordInput.value.length < 6) {
        password.innerHTML = "Password must be at least 6 characters";
        password.style.color = "red";
        passwordInput.style.border = "2px solid red";

    }
    else {
        password.innerHTML = "";
        passwordInput.style.border = "2px solid lightgreen";
    }

    if (reconfirmPasswordInput.value !== passwordInput.value){
        reconfirmPassword.innerHTML = "Passwords do not match";
        reconfirmPasswordInput.style.border = "2px solid red";
        reconfirmPassword.style.color = "red";
    }

   else  if(reconfirmPasswordInput.value.length === 0) {
        reconfirmPassword.innerHTML = "Password2 is required";
        reconfirmPasswordInput.style.border = "2px solid red";
        reconfirmPassword.style.color = "red";

    }

    else if(reconfirmPasswordInput.value === passwordInput.value) {
        reconfirmPassword.innerHTML = "";
        reconfirmPasswordInput.style.border = "2px solid lightgreen";
    }




}
