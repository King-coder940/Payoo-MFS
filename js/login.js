document.getElementById('login-btn').addEventListener('click',function(event){
event.preventDefault();
const phoneNum = document.getElementById('phone-num').value;

const pinNum = document.getElementById('pin-num').value;
console.log(phoneNum,pinNum);

if(phoneNum === '5' && pinNum === '1234'){
    console.log('loggend in succesfully')

}
else{
    alert('invalid phone number or pin')
}


})
