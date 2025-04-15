const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, 'users.json');

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

// Probando consulta con rutas dinámicas y GET
app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Mostrar información del usuario con ID: ${userId}`);
}); // @navegador -> localhost:3000/users/123

// Implementando consulta con parámetros de consulta y GET
app.get('/search', (req, res) => {
    const terms = req.query.termino || 'No especificado';
    const category = req.query.categoria || 'Todas';

    res.send(`
        <h2>Resultado de Búsqueda:</h2>
        <p>Término: ${terms}</p>
        <p>Categoría: ${category}</p>
        `)
}); // @navegador -> localhost:3000/search?termino=expressjs&categoria=nodejs

// Implementar envío de formulario con POST
app.post('/form', (req, res) => {
    const name = req.body.nombre || 'Anónimo';
    const email = req.body.email || 'No proporcionado';
    res.json({
        message: 'Datos recibidos',
        data: {
            name,
            email
        }
    })
}); // @navegador -> localhost:3000/form

app.post('/api/data', (req, res) => {
    const data = req.body;
    if (!data || Object.keys(data).length === 0){
        return res.status(400).json({error: 'No se recibieron datos'});
    }
    res.status(201).json({
        message: 'Datos JSON recibidos',
        data
    });
});

app.get('/users', (req, res) => {
    fs.readFile(usersFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({error: 'Error con la conexión de datos.'});
        }
        const users = JSON.parse(data);
        res.json(users);
    })
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    // Acá podemos hacer la validación de datos
    fs.readFile(usersFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({error: 'Erroro con conexión de datos.'});
        }
        const users = JSON.parse(data);
        users.push(newUser);
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if(err) {
                return res.status(500).json({error: 'Error al guardar el usuario.'});
            }
            res.status(202).json(newUser);
        });
    });
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10)
    const updatedUser = req.body;
    // Aplicar filtros aquí
    fs.readFile(usersFilePath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({error: 'Error con conexión de datos.'})
        }
        let users = JSON.parse(data);
        users = users.map(user => 
            user.id === userId ? {...user, ...updatedUser } : user
        );
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res
                .status(500)
                .json({error: 'Error al actualizar el usuario'});
            }
            res.json(updatedUser);
        });
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port http://localhost:${PORT}`);
});