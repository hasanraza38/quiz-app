const form =document.querySelector('form')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const loginBtn =document.querySelector('#login-btn')

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

loginBtn.addEventListener('click',(e) => {
    e.preventDefault()
 
        if (emailRegex.test(email.value) && passwordRegex.test(password.value)) {

            let user ={
                email : email.value,
                password : password.value,
                }
                // console.log(user);
                
                let userData = JSON.parse(localStorage.getItem('loginInfo'))
                
                let userArr=userData||[];
                
        
                    userArr.push(user)
               
                        console.log(userArr);
                        
                        localStorage.setItem('loginInfo',JSON.stringify(userArr))
                        console.log(userArr);
                        email.value=''
                        password.value=''        
            
        }
    else{
        alert('please enter valid email or password')
    }
                        
})

