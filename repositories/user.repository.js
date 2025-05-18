const User = require('../models/user.model');

//Consulta para crear de 1 a * usuarios
const createManyUsers = (usersArray) => User.insertMany(usersArray);
//consulta para buscar a los usuarios
const getUsers = (filter = {}) => User.find(filter);
//consulta para actualizar a un usuario en especifico por su id
const updateUser = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
//consulta para eliminar a un usuario en especifico apuntando a su id
const deleteUser = (id) => User.findByIdAndDelete(id);
//consulta que elimina a todos los usuarios (documentos) que existan en la base de datos
const deleteAll = () => User.deleteMany({});

module.exports = {
createManyUsers,
  getUsers,
  updateUser,
  deleteUser,
  deleteAll,
};
