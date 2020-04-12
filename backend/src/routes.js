const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const AvaliationController = require('./controllers/AvaliationController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);
    
routes.get('/avaliations', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), AvaliationController.index);

routes.post('/avaliations', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        ra: Joi.string().required().length(6),
        description: Joi.string().required(),
    })
}), AvaliationController.create);

module.exports = routes;