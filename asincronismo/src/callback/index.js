// Ejemplo #1: Callback
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) { // se puede usar otro nombre en lugar de "callback"
    return callback(num1, num2);
}

console.log(calc(2, 2, sum)); // No es necesario colocar los paréntesis ni los argumentos de la función sum, OJO!

// Ejemplo #2: Set Timeout
setTimeout(function(){
    console.log('Hola JavaScript')
}, 2000); // setTimeout en si misma es un callback

// Ejemplo #3
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Antonio");

// Playground
function execCallback(callback){
    window.setTimeout(callback, 2000);
}