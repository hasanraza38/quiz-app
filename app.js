const form =document.querySelector('form')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const loginBtn =document.querySelector('#login-btn')





loginBtn.addEventListener('click',(e) => {
    e.preventDefault()
    // user.localStorage.setItem(email.value,password.value )
    let user={

        email : email.value,
        password : password.value,
    
    }

    let userJson=JSON.stringify(user)
    let stored =localStorage.setItem('user',userJson)
    console.log(user);
    console.log(email.value);
    console.log(password.value);
})


