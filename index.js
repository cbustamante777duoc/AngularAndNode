const express = require('express');
const conectarBD = require('./config/db');
const cors = require('cors');

const app = express(); // creamos el servidor

conectarBD(); // extableciendo conexion con la base de datos mongoDbuseFindAndModify


app.use(express.json());
app.use(cors());
//la ruta creadas
app.use('/api/comentarios',require('./routes/comentario'));



app.listen(5000,  () =>{
    console.log("servidor iniciado en el puerto 5000");
});