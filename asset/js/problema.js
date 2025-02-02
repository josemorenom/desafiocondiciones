//PROBLEMA 1:
document.addEventListener("DOMContentLoaded", function () {
  const imagen = document.getElementById("imagen");

  imagen.addEventListener("click", function () {
    if (imagen.classList.contains("borde")) {
      imagen.classList.remove("borde");
    } else {
      imagen.classList.add("borde");
    }
  });
});

//PROBLEMA 2:
document.addEventListener("DOMContentLoaded", function () {
  const inputSticker1 = document.getElementById("sticker1");
  const inputSticker2 = document.getElementById("sticker2");
  const inputSticker3 = document.getElementById("sticker3");
  const botonVerificar = document.getElementById("verificar");
  const mensaje = document.getElementById("mensaje");

  botonVerificar.addEventListener("click", function () {
    const cantidadSticker1 = parseInt(inputSticker1.value) || 0;
    const cantidadSticker2 = parseInt(inputSticker2.value) || 0;
    const cantidadSticker3 = parseInt(inputSticker3.value) || 0;
    const totalStickers =
      cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    if (totalStickers <= 10) {
      mensaje.innerHTML = "Llevas " + totalStickers + " stickers.";
    } else {
      mensaje.innerHTML = "Llevas demasiados sticker.";
    }
  });
});

//PROBLEMA 3:
document.addEventListener("DOMContentLoaded", function () {
  const digito1 = document.getElementById("digito1");
  const digito2 = document.getElementById("digito2");
  const digito3 = document.getElementById("digito3");
  const botonIngresar = document.getElementById("ingresar");
  const resultado = document.getElementById("resultado");

  botonIngresar.addEventListener("click", function () {
    const password = + digito1.value + digito2.value + digito3.value;

    if (password === '911') {
      resultado.innerHTML = "pasword 1 correcto";
    } else if (password === '714') {
      resultado.innerHTML = "pasword 2 correcto";
    } else {
      resultado.innerHTML = "pasword incorrecto"
    }
  });
});
