// add money
document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
 
     const cashOutInput = document.getElementById('cash-out-input').value;
 
     const pinNumber = document.getElementById('cash-out-pin').value;
 
     if(pinNumber === '1234'){
         
 
     }
     else{
         alert('Transaction failed, please try again')
     }
     const balance = document.getElementById('account-balance').innerText;
     const cashOutNumber = parseFloat(cashOutInput);
     const BalanceNumber = parseFloat(balance);
     const newBalance =  BalanceNumber - cashOutNumber ;
     console.log(newBalance);
     document.getElementById('account-balance').innerText = newBalance;
     if(cashOutNumber > BalanceNumber){
        alert('insufficient Fund')
     }
 
 
    
 
    
 
 
 
 
 
 
 
 })