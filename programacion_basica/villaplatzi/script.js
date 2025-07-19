var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
}

var cantidad = aleatorio(5, 25);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas() {
  vaca.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true) 
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK) // por defecto se torna true, es redundante hacerlo == true como está arriba!
  {
	console.log(cantidad); 
    for (var v = 0; v < cantidad; v++) 
	{
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
	  var x = x * 60;
	  var y = y * 60; // esto reduce la "aleatoriedad"
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}

function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}