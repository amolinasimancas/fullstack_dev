const fs = require('fs');

// Crear un stream de lectura
const readStream = fs.createReadStream('js.txt', {
    encoding: 'utf8'
});

// Crear un stream de escritura
const writeStream = fs.createWriteStream('output-js.txt');

// Evento para procesar cada fragmento de datos
readStream.on('data', (chunk) => {
    console.log('Leyendo chunk');
    writeStream.write(chunk);
});

// Evento cuando finaliza la lectura
readStream.on('end', () => {
    console.log('Terminó la lectura del archivo');
    writeStream.end();
});

// Manejo de errores en la lectura
readStream.on('error', (err) => {
    console.log('Error de lectura del archivo', err);
});

// Manejo de errores en la escritura
writeStream.on('error', (err) => {
    console.log('Error en escritura del archivo', err);
});