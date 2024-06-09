const input1 = document.querySelector("#sticker1");
const input2 = document.querySelector("#sticker2");
const input3 = document.querySelector("#sticker3");
const mensaje = document.querySelector("#mensaje");
const boton = document.querySelector("#btn");

input1.addEventListener("input", () => {
  if (input1.value.length > 1) {
    input1.value = input1.value.slice(0, 1);
  }
});
input2.addEventListener("input", () => {
  if (input2.value.length > 1) {
    input2.value = input2.value.slice(0, 1);
  }
});
input3.addEventListener("input", () => {
  if (input3.value.length > 1) {
    input3.value = input3.value.slice(0, 1);
  }
});
boton.addEventListener("click", () => {
  let suma = Number(input1.value) + Number(input2.value) + Number(input3.value);

  if (suma > 10) {
    mensaje.innerHTML = `Has seleccionado ${suma} Sticker's <br> Cantidad Maxima de sticker's no debe exceder 10`;
  } else mensaje.innerHTML = `Llevas ${suma} Sticker's`;
});
