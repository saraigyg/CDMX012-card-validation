import validator from './validator.js';
//console.log(validator);

//console.log(validator.myFunction(""));
//console.log(validator.myFunctionTwo(""));



//funcion que al dar click en el boton validate corra mi función para validar ocupando el valor del usuario //
let buttonVal = document.getElementById("buttonValidate"); 
buttonVal.addEventListener("click", function() {
  let validate = validator.isValid(document.getElementById("user_cardNumber").value);
  if (validate === true) {
    document.getElementById("isValid").innerHTML = `<h3>Valid Card Number</h3>`
  } else {
    document.getElementById("isValid").innerHTML = `<h3>Invalid Card Number</h3>`
  }
  //(document.getElementById("isValid").innerHTML)=validate;
  let maskify = validator.maskify(document.getElementById("user_cardNumber").value); 
  (document.getElementById("kitty").innerHTML)=maskify;
});


