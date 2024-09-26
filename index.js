const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const path = require('path');


const app = express();
const port = 1702;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rutas para las API de empleados
app.use('/api/employees', employeeRoutes);

// Inicia el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


