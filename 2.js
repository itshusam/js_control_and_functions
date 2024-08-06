
const bankAccount = {
    balance: 0
};


function deposit(amount) {
    if (amount <= 0) {
        console.log('Deposit amount must be greater than zero.');
        return;
    }
    bankAccount.balance += amount;
    console.log(`Deposited: $${amount.toFixed(2)}`);
    displayBalance();
}


function withdraw(amount) {
    if (amount <= 0) {
        console.log('Withdrawal amount must be greater than zero.');
        return;
    }
    if (amount > bankAccount.balance) {
        console.log('Insufficient funds.');
        return;
    }
    bankAccount.balance -= amount;
    console.log(`Withdrew: $${amount.toFixed(2)}`);
    displayBalance();
}


function displayBalance() {
    console.log(`Current Balance: $${bankAccount.balance.toFixed(2)}`);
}





deposit(500);   
withdraw(150); 
withdraw(1000); 
deposit(200);  
displayBalance(); 
