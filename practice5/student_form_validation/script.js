document.getElementById('submit').addEventListener('submit',function(event){
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var password_pattern = /^[a-zA-Z]{4,}[0-9]/;
    var atPos = email.indexOf('@');
    var dotPos = email.lastIndexOf('.');

    if(username.length<1){
        event.preventDefault();
        alert("Fill out the username.");
        document.form.username.focus();
    }
    if(atPos<1 || (dotPos-atPos)<3){
        event.preventDefault();
        alert("Please enter a valid email.");
        document.form.username.focus();
    }
    if(!password.match(password_pattern)){
        event.preventDefault();
        alert("Please enter an alphanumeric password of at least 6 characters.");
        document.form.username.focus();
    }
    return true;
});