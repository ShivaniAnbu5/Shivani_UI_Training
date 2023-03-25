function DoBanking(cardNumber){

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

    function validateCardNumber(){
        let flag = false;
        for(let temp of userAccounts){
            if(temp.cardNumber == cardNumber){
                flag = true;
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
            let pin = prompt("Enter your pin!!");
            let flag = false;
            for(let temp of userAccounts){
                    if(temp.pin == pin){
                        flag = true;
                        alert("Current account balance: "+temp.accountBalance);
                        let amount = prompt("Enter the amount you want to withdraw");
                        if(amount < temp.accountBalance){
                            temp.accountBalance -= amount;
                            alert("Amount withdrawn: "+amount+" Account balance: "+temp.accountBalance);
                        }
                        else{
                            alert("Insufficient Account Balance!");
                        }
                        if(flag) break;
                    }
            }
            if(!flag){
                alert("Invalid pin!");
            }
        }       
    
        function deposit(){
            let pin = prompt("Enter your pin!!");
            let flag = false;
            for(let temp of userAccounts){
                    if(temp.pin == pin){
                        flag = true;
                        alert("Current account balance: "+temp.accountBalance);
                        let amount = prompt("Enter the amount you want to deposit");
                        temp.accountBalance +=  parseInt(amount);
                        alert("Amount deposited: "+amount+" Account balance: "+temp.accountBalance);
                    }
                    if(flag) break;
                }
                if(!flag){
                    alert("Invalid pin!");
                }
            }



        if(option == 1) withdraw();
        else if(option == 2) deposit();
        else alert("Enter a valid option!");
    }

    return validateCardNumber;
   
}

let cardNumber  = prompt("Enter your card number!!");
let banking = DoBanking(cardNumber);

banking();

// withdraw(8562234567391234,5565,9000);
// deposit(6560234567891234,1346,9000);
