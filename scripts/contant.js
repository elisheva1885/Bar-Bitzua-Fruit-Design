const emailFormat= ()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email_input = document.getElementById('email').value;
    if(!emailRegex.test(email_input)){
        alert("Invalid Email");
        return false; 
    }
    return true; 
}