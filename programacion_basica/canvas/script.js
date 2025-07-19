function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
  alert("No me toques ahí");
  var lineas = parseInt(texto.value);
  var colorcito = "blue";
  var colorsote = "red";
  var espacio = ancho / lineas;

  var yi, xf;
  var l = 0;
  var fin = ancho - 1;

  while (l < lineas) {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    console.log("Linea " + l);
    l++;
  }

  for (j = 0; j < lineas; j++) {
    xi = espacio * j;
    yf = espacio * (j + 1);
    dibujarLinea(colorsote, xi, 0, ancho, yf);
  }

  dibujarLinea(colorcito, 1, 1, 1, fin);
  dibujarLinea(colorcito, 1, fin, fin, fin);
  dibujarLinea(colorsote, 1, 1, fin, 1);
  dibujarLinea(colorsote, fin, 1, fin, fin);
}

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");

boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;

console.log(lienzo);