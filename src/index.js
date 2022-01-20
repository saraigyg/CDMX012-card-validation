import validator from './validator.js';
console.log(validator);



  /***********************input card number ***********/
  /*******numbers only**************/
  /*function numbersOnly(event) {
      return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));
  }

  const input = document.querySelector("input");
  input.onkeydown = numbersOnly;

  input.onpaste = Event => false;
*/


/**** function button next******/
function next () {
  document.getElementById("secondWindow").style.display = "none";
}

function next() {
  let x = document.getElementById("secondWindow");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

/***function button reload**** */
const reload = document.getElementById("reset");
reload.addEventListener("click",_=> {location.reload();})




