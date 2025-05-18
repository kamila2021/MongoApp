const mongoose = require('mongoose');

//Esquema necesario, para crear un usuario, propiedades necesarias para crear un usuario desde 0
const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
}, {
  timestamps: true,
  strict: false //permite agregar nuevas propiedades al schema sin romperlo

});

module.exports = mongoose.model('User', UserSchema);
