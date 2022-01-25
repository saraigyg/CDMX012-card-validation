import validator from './validator.js';
console.log(validator);

console.log(validator.myFunction(""));
console.log(validator.myFunctionTwo(""));



//funcion que al dar click en el boton validate corra mi función para validar ocupando el valor del usuario //
let buttonVal = document.getElementById("buttonValidate"); 
buttonVal.addEventListener("click", function() {
  let validate = validator.myFunction(document.getElementById("user_cardNumber").value);
  (document.getElementById("isValid").innerHTML)=validate;
  let maskify = validator.myFunctionTwo(document.getElementById("user_cardNumber").value); 
  (document.getElementById("kitty").innerHTML)=maskify;
});


