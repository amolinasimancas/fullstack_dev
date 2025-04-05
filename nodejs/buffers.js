// Llamar Buffer
const buffer = require('buffer');

// Crear Buffer para almacenar String
const bufferFromString = Buffer.from('Hello World', 'utf8');
console.log(bufferFromString);

// Crear Buffer de tamaño predeterminado, escribir y leer
const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);

bufferAlloc.write('node.js');
console.log(bufferAlloc);

// Para obtener todo el contenido
const fullString = bufferAlloc.toString('utf8', 0, 10);
console.log(fullString);