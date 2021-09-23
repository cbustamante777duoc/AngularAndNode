const express = require('express');
const router = express.Router();

const comentarioController = require('../controllers/comentarioController');
//crear un comentario
router.post('/',comentarioController.crear);
//listar comentarios
router.get('/',comentarioController.obtener);
//eliminar comentario
router.delete('/:id',comentarioController.eliminar);