const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send(`
        <h1>Curso Express.js</h1>
        <p>Esto es una aplicación Node.js con Express.js</p>
        <p>Corre en el puerto ${PORT}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});