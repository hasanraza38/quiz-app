const form =document.querySelector('form')
const email =document.querySelector('#email')
const password =document.querySelector('#password')
const loginBtn =document.querySelector('#login-btn')

let userArr;
let userData = JSON.parse(localStorage.getItem('user'))

if (userData === null) {
    userArr=[]
    
} else {
    userArr=userData
    
}
// userArr===null? userArr=[]:userArr=userData


loginBtn.addEventListener('click',(e) => {
    e.preventDefault()
    // user.localStorage.setItem(email.value,password.value )

    localStorage.setItem('user',JSON.stringify(userArr))
    console.log(userArr);
    // let user={

    //     email : email.value,
    //     password : password.value,
    
    // }

    // let userJson=JSON.stringify(user)
    // let stored =localStorage.setItem('user',userJson)
    // console.log(user);
    // console.log(email.value);
    // console.log(password.value);
})













// // Setting sample cart items in local storage
// let sampleCartItems = [
//     { id: 1, name: 'Apple', quantity: 2 },
//     { id: 2, name: 'Banana', quantity: 3 }
// ];

// console.log(localStorage.setItem('cart', sampleCartItems)) ;

// // Your original code
// let arr;
// let items = JSON.parse(localStorage.getItem('cartItems'));  // Retrieving 'cartItems' from local storage

// if(items === null){
//     arr = [];
// }else{
//     arr = items;
//     console.log(arr);  // This will print the items retrieved from local storage
// }


