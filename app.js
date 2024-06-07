const form =document.querySelector('form')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const loginBtn =document.querySelector('#login-btn')


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;



loginBtn.addEventListener('click',(e) => {
    e.preventDefault()
    
    
    let user ={
        email : email.value,
        password : password.value,
        }
        // console.log(user);
        
        let userData = JSON.parse(localStorage.getItem('loginInfo'))
        
        let userArr=userData||[];
        if (email.value||password.value=== null) {
            alert('please fil the feilds')            
        } else {

            userArr.push(user)
       
                console.log(userArr);
                // userArr===null? userArr=[]:userArr.push(userData)
                
                localStorage.setItem('loginInfo',JSON.stringify(userArr))
                console.log(userArr);
                email.value=''
                password.value=''
                
            
        }
        
        
                
})


