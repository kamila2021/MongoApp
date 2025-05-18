const userRepo = require('../repositories/user.repository');

module.exports = {
createMany: userRepo.createManyUsers, 
    find: userRepo.getUsers,
  update: userRepo.updateUser,
  remove: userRepo.deleteUser,
  clearAll: userRepo.deleteAll,
};
