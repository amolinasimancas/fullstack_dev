/*
 CLOSURE: función que tiene acceso a variables de un ámbito externo,
 incluso después de que esa función haya terminado de ejecutarse.

 Ámbito léxico: cada vez que se declara una función,
 crea su propio Ámbito léxico, y puede acceder a las variables
 dentro de ese ámbito y a las variables en ámbitos superiores.
*/

// Ejemplo 1
function outerFunction () {
    let outerVariable = "I am from outer function"

    function innerFunction () {
        console.log(outerVariable)
    }

    return innerFunction
}

const closureExample = outerFunction()
closureExample()

// Ejemplo 2
function createCounter () {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}

const counterA = createCounter()
counterA()
counterA()

const counterB = createCounter()
counterB()

// Ejemplo 3
function outer () {
    let message = "Hello, "

    function inner (name) {
        console.log(message + name)
    }

    return inner
}

const closureA = outer()
const closureB = outer()

closureA("Alice")
closureA("Bob")