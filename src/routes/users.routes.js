const Users = require('../controllers/users.controller');

module.exports.UserRoutes = function (router) {
  router.post('/create', Users.createUser);
  router.get('/get', Users.getUsers);
  router.get('/user/:id', Users.find);
//   router.put('/update/:id', Users.updateUser);
//   router.delete('/remove/:id', Users.removeUser);   deadd
};
