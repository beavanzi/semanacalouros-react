const express = require('express');

const AvaliationController = require('./controllers/AvaliationController');

const routes = express.Router();

routes.get('/avaliations', AvaliationController.index);
routes.post('/avaliations', AvaliationController.create);

module.exports = routes;