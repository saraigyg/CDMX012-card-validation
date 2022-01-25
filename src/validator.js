/****function button validate *****/
const validator = {
 myFunction: function cardValidation_isValid (array) {
   //pasar de un objeto tipo string a un arreglo separado por comas y guardarlo en una variable n 
   if (array == 0) {
     return "Please, insert a card number";
   }
   let n = array.split("");
   //pasar el arreglo de string separado por comas a un nuevo arreglo pero numérico y en orden inverso, eso guardarlo en
   //una variable x
   let x = n.map((i) => Number(i)).reverse();
   //saber la longitud de ese array para poder encontrar las posiciones impares
   for (let i=0; i < x.length; i++) {
     if (i % 2 !== 0) {
  //multiplicar el numero en posición impar por dos y guardar la variable
      x[i]=x[i]*2;
    // si ese numero multiplicado es mayor o igual a 10
     } if (x[i] >= 10) {
    //pasar el número a un arreglo tipo string y separar ese arreglo mediante comas y 
    //después pasarlo a un nuevo arreglo numérico compuesto cada par de dos numeros impares 
    //y guardar en variable s
      let s = x[i].toString().split("").map((i) => Number(i));
    //ahora x[i] será igual a la suma del valor de la posición 0 más la suma del valor de la posición 1   
      x[i] = s[0] + s[1]; 
     } 
     //suma total o reducción a un solo valor de todo el arreglo x incluyendo los nuevos números del paso anterior y guardo en una variable 
   } let total = x.reduce((a,b) => a + b, 0);
   //si el valor de la suma total es múltiplo de 10
    if (total % 10 === 0) {
  //imprime valid card
    return "Valid Card Number"; 
  //console.log("Valid Card Number");
   } 
  //imprime invalid card al no ser múltiplo de 10 
      else {
     return "Invalid Card Number";
        //console.log("Invalid Card Number");
   }
  },
  //para insertar el # en todo el arreglo menos en los últimos cuatro dígitos 
  myFunctionTwo: function validator_maskify (mask) {
  //el objeto tipo arreglo insertado cambiarlo a string [" "] y éste será remplazado con aserción anticipada que reemplace los últimos 4 con #
    let maskify = mask.toString().replace(/.(?=.{4})/g, "#"); 
    return (maskify);
    //console.log(maskify); 
  }
}
export default validator;