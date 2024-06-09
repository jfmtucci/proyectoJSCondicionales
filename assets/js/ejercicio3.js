const num1 = document.getElementById("sl1");
const num2 = document.getElementById("sl2");
const num3 = document.getElementById("sl3");
const boton = document.getElementById("btn");
const msn = document.getElementById("mensaje");

// pass1 911 pass2 714
boton.addEventListener("click", () => {
  let n1 = parseInt(num1.value),
    n2 = parseInt(num2.value),
    n3 = parseInt(num3.value);
  if (n1 === 9 && n2 === 1 && n3 === 1) {
    msn.innerHTML = "Password 1 correcto";
    msn.style.backgroundColor = "green";
  } else if (n1 === 7 && n2 === 1 && n3 === 4) {
    msn.innerHTML = "Password 2 correcto";
    msn.style.backgroundColor = "green";
  } else {
    msn.innerHTML = "Password incorrecto";
    msn.style.backgroundColor = "red";
  }
});
