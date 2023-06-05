const usersModel = require('../models/users.model');

exports.createUser = async (request, response) => {
  const user = new usersModel(request.body);
  console.log('user', user);
  try {
    await user.save();
    response.send(user);
    response.send({
      message: 'User created successfully',
    });
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.getUsers = async (request, response) => {
  const users = await usersModel.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
};

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: 'Content can not be emtpy!' });
    return;
  }

  // new user
  const user = new usersModel({
    name: req.body.name,
    email: req.body.email,
  });

  user
    .save(user)
    .then((data) => {
      res.redirect('/add-user');
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurre',
      });
    });
};

exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;
    console.log('iddd', id);
    const data = usersModel.findById(id);
    if (!data) {
      res.status(404).send({ message: 'Not found user with id ' + id });
    } else {
      res.send(data);
    }
    //   .catch((err) => {
    //     res.status(500).send({ message: 'Erro retrieving user with id ' + id });
    //   });
  } else {
    // usersModel
    //   .find()
    //   .then((user) => {
    //     res.send(user);
    //   })
    //   .catch((err) => {
    //     res.status(500).send({
    //       message:
    //         err.message || 'Error Occurred while retriving user information',
    //     });
    //   });
  }
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Data to update can not be empty' });
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error Update user information' });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: 'User was deleted successfully!',
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete User with id=' + id,
      });
    });
};
