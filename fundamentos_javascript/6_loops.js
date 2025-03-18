// Ejemplo ciclo for
let list = ["eat", "sleep", "code", "repeat"];

for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

// Ejemplo ciclo for of
let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
  console.log(fruta);
}

// Ejemplo ciclo for in
const listaDeCompras = {
  manzana: 5,
  pera: 3,
  naranja: 2,
  uva: 1,
};

for (fruta in listaDeCompras) {
  console.log(fruta);
}

for (fruta in listaDeCompras) {
  console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
/*
for (fruta of listaDeCompras) {
  console.log(fruta);
} // Dará error!*/

// Ejemplo de ciclo while
let contador = 0;

while (contador < 10) {
  console.log(contador);
  contador++;
}

// Ejemplo de ciclo do while
let conteo = 0;

do {
  console.log(conteo);
  conteo++;
} while (conteo < 10);