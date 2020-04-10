const express = require('express');

const AvaliationController = require('./controllers/AvaliationController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/avaliations', AvaliationController.index);
routes.post('/avaliations', AvaliationController.create);

module.exports = routes;