const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

//peticion POST para crear un nuevo usuario
router.post('/', userController.createUser);
//peticion GET para obtener a todos los usuarios (en este caso se deuvelven todos que cumplen con la condicion)
router.get('/', userController.getUsers);
//peticion PATCH para modificar cualquier usuario que existe en la base de datos agregando una nueva propiedad sin afectar al resto de usuarios
router.patch('/:id', userController.updateUser);
//peticion DELETE para eliminar un usuario especifico de la base de datos
router.delete('/:id', userController.deleteUser);
//peticion DELETE que elimina a todos los usuarios de la base de datos
router.delete('/', userController.deleteAllUsers);

module.exports = router;
