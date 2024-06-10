
             // register


 const registerForm=document.querySelector('#register_form')
 const registerEmail=document.querySelector('#register_email')
 const registerUserName=document.querySelector('#register_username')
 const registerPassword=document.querySelector('#register_password')
 const registerBtn=document.querySelector('#register_btn')
             
 
 const registerEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const registerPasswordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
 const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/;
 
 
 registerBtn.addEventListener('click',(event)=>{
   event.preventDefault();
  //  window.location('index.html')

  if (registerEmailRegex.test(registerEmail.value) && registerPasswordRegex.test(registerPassword.value) && usernameRegex.test(registerUserName.value))   {

    
    let registerUser ={
        email : registerEmail.value,
        password : registerPassword.value,
        userName :registerUserName.value,
        }
        // console.log(user);
        
        let registerUserData = JSON.parse(localStorage.getItem('signUpInfo'))
        
        let registerUserArr=registerUserData||[];
        

            registerUserArr.push(registerUser)
       
                // console.log(registerUserArr);
                
                localStorage.setItem('signUpinfo',JSON.stringify(registerUserArr))
                console.log(registerUserArr);
                registerEmail.value=''
                registerPassword.value=''   
                registerUserName.value=''   
                

// alert('registered successfully')
    
}

else{
alert('please enter valid information')
}

 })         