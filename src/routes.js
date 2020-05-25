const express = require('express');

const validation = require('./validator/User');
const UserController = require('./controllers/UserController');

const routes = express.Router();

routes.get('/users', validation.getAll, UserController.index);
routes.post('/users', validation.create, UserController.create);
routes.put('/users/:id', validation.update, UserController.update);
routes.delete('/users/:id', validation.destroy, UserController.delete);

module.exports = routes;
