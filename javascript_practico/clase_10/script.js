console.log('Script conectado correctamente!');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const p_clase = document.querySelector('.clase_parrafo');
const p_id = document.querySelector('#id_parrafo');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    p_clase,
    p_id,
    input,
});

// h1.innerHTML = 'Título cambiado! <br> Protege el DOM';
h1.innerText = 'Forma segura de modificar el DOM';
console.log(h1.getAttribute('pantalla')); // En h1 colocamos la clase pantalla = "Samsung"
h1.setAttribute('pantalla','Sony'); // Acá modificamos ese atributo y en inspector mostrará "Sony"

h1.classList.add('LG'); // Agrega una clase de forma dinámica: class = "LG", visible en inspector
h1.classList.add('Sony'); // Agrega una segunda clase
h1.classList.remove('LG'); // Remueve una clase

// h1.classList.toggle('Apple'); // Permite cambiar entre clases
// h1.classList.contains('Sony'); // Retorna True si está presente la clase

input.value = "Reemplazado por JS"; // Reemplaza desde JS el texto por defecto de un input

const img = document.createElement('img'); // Crear un elemento HTML
img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJGpyr1DxoAcsdAlCC9KXifGQyHwre-XHCmw&s')
console.log(img);

p_id.appendChild(img); // También funciona con append(img)