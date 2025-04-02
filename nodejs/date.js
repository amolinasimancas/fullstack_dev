// date.js
const dateFormatter = require('platzi_date');

// Obtener timestamp actual
console.log(dateFormatter.getTimeStamp());

// Obtener fecha en español (formato por defecto)
console.log(dateFormatter.getLongTime());

// Obtener fecha en inglés
console.log(dateFormatter.getLongTime('en-US'));