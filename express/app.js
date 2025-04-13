const express = require('express');
const app = express();
const bodyParser = require('body-parser');

require('dotenv').config();
const PORT = process.env.PORT || 3000;
console.log(PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send(`
        <h1>Curso Express.js</h1>
        <p>Esto es una aplicación Node.js con Express.js</p>
        <p>Corre en el puerto ${PORT}</p>
    `);
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Mostrar info con ID: ${userId}`);
});

app.get('/search', (req, res) => {
    const terms = req.query.termino || 'No especificado';
    const category = req.query.categoria || 'Todas';

    res.send(`
        <h2>Resultado de Búsqueda:</h2>
        <p>Término: ${terms}</p>
        <p>Categoría: ${category}</p>
        `)
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});