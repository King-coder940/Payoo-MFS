// add money
document.getElementById('add-money').addEventListener('click',function(event){
   event.preventDefault();

    const addMoneyInput = document.getElementById('add-money-input').value;

    const pinNumber = document.getElementById('input-pin-number').value;

    if(pinNumber === '1234'){
        

    }
    else{
        alert('Transaction failed, please try again')
    }
    const balance = document.getElementById('account-balance').innerText;
    const addMoneyNumber = parseFloat(addMoneyInput);
    const BalanceNumber = parseFloat(balance);
    const newBalance = addMoneyNumber + BalanceNumber;
    console.log(newBalance);
    document.getElementById('account-balance').innerText = newBalance;


   

   







})