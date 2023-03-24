var inputs = document.getElementsByTagName("input");
var submitButton = document.querySelector(".submitBtn");
var firstName,lastName,email,contact,pincode,cardNumber,cardExpiry,cvv;

var firstNameContainer = document.querySelector(".first-name-container");
var lastNameContainer = document.querySelector(".last-name-container");
var p = document.querySelector(".error");

var inputsObject = {
  firstName : {
      name : "firstName",
      value : inputs[0].value,
      error : "First name is required",
      regex : /^[a-zA-Z]{1,30}$/,
      regexError : "First Name is not valid",
    } ,
    lastName :{
      name : "lastName",
      value : inputs[1].value,
      error : "Last Name is required",
      regex : /^[a-zA-Z]{1,30}$/,
      regexError : "Last Name is not valid",
    } ,
    email : {
      name : "email",
      value : inputs[2].value,
      error : "Email Address is required",
      regex : /^(?!.{51})[a-z0-9]+(?:\.[a-z0-9]+)*@[a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-zA-Z]{2,6}$/,
      regexError : "Email Address is not valid",
    },
    contact : {
      name : "contact",
      value : inputs[3].value,
      error : "Contact Number is required",
      regex : /^(0|91)?[6-9][0-9]{9}$/,
      regexError : "Contact Number is not valid",
    },
    pincode :{
      name : "pincode",
      value : inputs[4].value,
      error : "PIN Code is required",
      regex : /^[\d]{6}$/,
      regexError : "PIN Code is not valid",
    },
    cardNumber :{
      name : "cardNumber",
      value : inputs[5].value,
      error : "Card Number is required",
      regex : /^4[0-9]{12}(?:[0-9]{3})?$/,
      regexError : "Card Number is not valid",
    },
    cardExpiry : {
      name : "cardExpiry",
      value : inputs[6].value,
      error : "Card Expiry is required",
      regex : /^[\d]{4}$/,
      regexError : "Card Expiry is not valid",
    },
    cvv :{
      name : "cvv",
      value : inputs[7].value,
      error : "CVV is required",
      regex : /^[\d]{3,4}$/,
      regexError : "CVV is not valid",
    },
  };

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();

    for(let temp of inputs){
      if(temp.value == ""){
        temp.nextElementSibling.nextElementSibling.innerHTML = inputsObject[temp.className].error;
        temp.style.borderColor = "#a4332c";
      }
    }

    let flag = true;
    for(let temp of inputs){
      if(temp.value == "" || temp.nextElementSibling.nextElementSibling.innerHTML != ""){
        flag = false;
      }
    }
    if(flag) document.billingForm.submit();
    else console.log("Not submitted");

    
})

for(let temp of inputs){

    temp.addEventListener("keyup",() => {
      temp.nextElementSibling.nextElementSibling.innerHTML = "";
      let result = inputsObject[temp.className].regex.test(temp.value);
      if(temp.value.length>0 && !result){
        temp.nextElementSibling.nextElementSibling.innerHTML = inputsObject[temp.className].regexError;
        temp.style.borderColor = "#a4332c";
      }
      else if(result){
        temp.nextElementSibling.nextElementSibling.innerHTML = "";
        temp.style.borderColor = "#d3d3d3";
      }
      else{
        temp.nextElementSibling.nextElementSibling.innerHTML = inputsObject[temp.className].error;
        temp.style.borderColor = "#a4332c";
      }

      if(inputs[6].value !="" &&!(inputs[6].value >= new Date().getFullYear())){
        inputs[6].nextElementSibling.nextElementSibling.innerHTML = inputsObject[inputs[6].className].regexError;
        inputs[6].style.borderColor = "#a4332c";
      }
    }
    );
  }