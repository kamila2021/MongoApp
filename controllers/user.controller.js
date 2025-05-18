const userService = require('../services/user.service');

//controlador, maneja la creacion de 1 a * usuarios
exports.createUser = async (req, res) => {
    const data = req.body;

    try {
      if (Array.isArray(data)) {
        const users = await userService.createMany(data);
        return res.status(201).json(users);
      }
      const user = await userService.create(data);
      res.status(201).json(user);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error al crear usuario(s)' });
    }
  };
  

//controlador, se busca a todos los usuarios que existen en la base de datos que sean mayores a la edad ingresada
exports.getUsers = async (req, res) => {
  const { age } = req.query;
  const filter = age ? { age: { $gt: age } } : {};
  const users = await userService.find(filter);
  res.json(users);
};

//controlador, se modifica el usuario, agregando una nueva propiedad sin romper a este
exports.updateUser = async (req, res) => {
  const user = await userService.update(req.params.id, req.body);
  res.json(user);
};

//elimina a un usuario en especifico, indicando el _id creado por mongo para apuntarlo
exports.deleteUser = async (req, res) => {
  await userService.remove(req.params.id);
  res.status(204).send();
};

//elimina a todos los usuarios que existen en la base de datos
exports.deleteAllUsers = async (_req, res) => {
  await userService.clearAll();
  res.status(204).send();
};
