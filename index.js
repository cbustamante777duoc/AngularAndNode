const express = require('express');
const conectarBD = require('./config/db');

const app = express(); // creamos el servidor

conectarBD(); // extableciendo conexion con la base de datos mongoDbuseFindAndModify

app.get('/', (req, res) =>{

    res.send('hola mundo desde node.js');

});


app.listen(5000,  () =>{
    console.log("servidor iniciado en el puerto 5000");
});