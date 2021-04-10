

function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("password").value;  
    var pw2 = document.getElementById("confirm_password").value;  
    
    
    //check empty password field  
    if(pw1 == "") {  
      document.getElementById("message1").innerHTML = "Fill the password please!";  
      document.getElementById("password").style.border = "2px solid red";
      return false;  
    }  
    
    //check empty confirm password field  
    if(pw2 == "") {  
      document.getElementById("message2").innerHTML = "Re-enter the password please!";  
      document.getElementById("confirm_password").style.border = "2px solid red";
      return false;  
    }   
     
    //minimum password length validation  
    if(pw1.length < 8) {  
      document.getElementById("message1").innerHTML = "Password length must be atleast 8 character"; 
      document.getElementById("password").style.border = "2px solid red";
      return false;  
    }  
  
    //maximum length of password validation  
    if(pw1.length > 28) {  
      	document.getElementById("message1").innerHTML = "Password length must not exceed 16 characters";  
      	document.getElementById("password").style.border = "2px solid red";
      	return false;  
    }  

    //atleast 1 numeric value
    if(pw1.search(/[0-9]/) == -1){
    	document.getElementById("message1").innerHTML = "Atleast 1 numeric value must be present";  
      	document.getElementById("password").style.border = "2px solid red";
      	return false;
    }

    //atleast 1 uppercase letter
    if(pw1.search(/[A-Z]/) == -1){
    	document.getElementById("message1").innerHTML = "Atleast 1 uppercase letter must be present";  
      	document.getElementById("password").style.border = "2px solid red";
      	return false;
    }
    
    if(pw1 != pw2) {  
      	document.getElementById("message2").innerHTML = "Passwords do not match";  
      	document.getElementById("confirm_password").style.border = "2px solid red";
      	return false;  
    } 

    else {    
        return;
    }  
 }  

