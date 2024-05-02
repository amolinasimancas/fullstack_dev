// Ejemplo #1
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumbers) { // se puede usar "callback" en lugar de sumNumbers
    return sumNumbers(num1, num2);
}

console.log(calc(2, 2, sum));

// Ejemplo #2
setTimeout(function(){
    console.log('Hola JavaScript')
}, 2000) // setTimeout en si misma es un callback

// Ejemplo #3
function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Antonio");

// Playground
function execCallback(callback){
    window.setTimeout(callback, 2000);
}