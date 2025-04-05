// Marcamos la hora actual para ver el flujo de ejecución
console.log("Hora actual", new Date().toLocaleTimeString());

// setTimeout - ejecuta código después de un tiempo específico (una sola vez)
const timeout = setTimeout(() => {
  console.log("Este mensaje aparece después de dos segundos");
}, 2000);

// setImmediate - ejecuta código en la próxima iteración del bucle de eventos
setImmediate(() => {
  console.log("Este mensaje aparece en la próxima interacción del bucle");
});

// setInterval - ejecuta código repetidamente con un intervalo de tiempo
const intervaloID = setInterval(() => {
  console.log("Este mensaje aparece cada tres segundos");
}, 3000);

// Cancelar el intervalo después de 10 segundos
setTimeout(() => {
  console.log("Cancelar el intervalo después de diez segundos");
  clearInterval(intervaloID);
}, 10000);

// Crear un timeout que nunca se ejecutará porque lo cancelamos inmediatamente
const timeOutID = setTimeout(() => {
  console.log("Este mensaje nunca aparecerá");
}, 10000);
clearTimeout(timeOutID);

console.log("Hora final", new Date().toLocaleTimeString());