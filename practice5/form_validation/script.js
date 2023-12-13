document.getElementById("RegForm").addEventListener('submit', function(event){
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    
    var password_pattern = /^[a-zA-Z]{4,}.[0-9]+$/
    var atPos = email.indexOf('@')
    var dotPos = email.lastIndexOf('.')

    if(!password.match(password_pattern)){
        event.preventDefault()
        alert('Your password must be alphanumeric and more than 8 characters.');
        document.RegForm.password.focus()
    }
    if(atPos<1 || (dotPos-atPos<2)){
        event.preventDefault()
        alert('Please enter a valid email.')
        document.RegForm.email.focus()
    }
    if(age<8 || age>60){
        event.preventDefault()
        alert('Invalid age')
        document.RegForm.age.focus()
    }
    return true
}
);