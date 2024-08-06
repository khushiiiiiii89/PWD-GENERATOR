let passwordButton=document.getElementsByClassName('btn');
passwordButton=passwordButton[0]
console.log(passwordButton);
let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let lowerCase='abcdefghijklmnopqrstuvwxyz'

let number='0123456789'

let specialChar='!@#$%^&*()_+><?|'


passwordButton.addEventListener('click',()=>{
    let password='';
    let input=document.getElementsByClassName('input');
    console.log(input)
    for(i=0 ; i<3 ; i++){

            password += upperCase[Math.floor(Math.random()*upperCase.length)];
            
            password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
            
            password += number[Math.floor(Math.random()*number.length)];
            
            password += specialChar[Math.floor(Math.random()*specialChar.length)];
            
        }
        input[0].innerHTML = password;
        console.log(password)
        // passwordText.value=password;
    })
