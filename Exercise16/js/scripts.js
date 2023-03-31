function DoBanking(){

    var userAccounts = [
        {
              accountNo : 12345,
              cardNumber : 4568234567891234,
              pin : 1004,
              accountBalance : 1000,
            } ,
        {
              accountNo : 12346,
              cardNumber : 1569234567891234,
              pin : 9999,
              accountBalance : 15660,
            } ,
        {
              accountNo : 12347,
              cardNumber : 6560234567891234,
              pin : 1346,
              accountBalance : 101,
            },
        {
              accountNo : 12348,
              cardNumber : 4561234565891234,
              pin : 8393,
              accountBalance : 10000,
            },
        {
              accountNo : 12349,
              cardNumber : 8562234567391234,
              pin : 5565,
              accountBalance : 99900,
            },
      ];

    var userAccount,enteredPin;
    function validateCardNumber(cardNumber,pin){
        let flag = false;
        for(let temp of userAccounts){
            if(temp.cardNumber == cardNumber){
                userAccount = temp;
                flag = true;
                enteredPin=pin;
                selectOption();
            }
            if(flag) break;
        }
        if(!flag){
            alert("Invalid Card Number!");
        }
    }

    function selectOption(){
        let option = prompt("Do you want to withdraw(1) or deposit(2)?");

        function withdraw(){
                    if(userAccount.pin == enteredPin){
                        alert("Current account balance: "+userAccount.accountBalance);
                        let amount = prompt("Enter the amount you want to withdraw");
                        if(amount < userAccount.accountBalance){
                            userAccount.accountBalance -= amount;
                            alert("Amount withdrawn: "+amount+" Account balance: "+userAccount.accountBalance);
                        }
                        else{
                            alert("Insufficient Account Balance!");
                        }
                    }
            else{
                alert("Invalid pin!");
            }
        }       
    
        function deposit(){
                    if(userAccount.pin == enteredPin){
                        alert("Current account balance: "+userAccount.accountBalance);
                        let amount = prompt("Enter the amount you want to deposit");
                        userAccount.accountBalance +=  parseInt(amount);
                        alert("Amount deposited: "+amount+" Account balance: "+userAccount.accountBalance);
                    }
                else{
                    alert("Invalid pin!");
                }
            }



        if(option == 1) withdraw();
        else if(option == 2) deposit();
        else alert("Enter a valid option!");
    }

    return validateCardNumber;
   
}

const banking = DoBanking();

banking(8562234567391234,5565);

banking(8562234567391234,5565);


