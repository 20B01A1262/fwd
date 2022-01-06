function FormValidation(){
    var name=document.getElementById("Name");
    var password=document.getElementById("password");
    var phonenumber=document.getElementById("PhoneNumber");
    var gender=document.getElementById("gender");
    var lang=document.getElementById("language");
    if(name.value.length<6){
        alert("Name length should not be less than 6 characters");
     
    }
   
    // else if(!(email.value.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/))){
    //     alert("please enter a valid email id");
      
    // }
    
    else if(password.value.length<6){
        alert("password length should not be less than 6 characters");
      
    }
    else if(phonenumber.value.length!=10){
       alert("phonenumber should be of length 10 only"); 
    
    }
   else if(gender.value=="gender"){
        alert("choose gender");
    }
 
    else if(language.value=="Language"){
        alert("choose language");
    }

    else{
        document.write("your response submitted successfully");
    }
 
}