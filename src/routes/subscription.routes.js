const { Router: router } = require('express');
const routes = router();

const controller = require('../controllers/subscription.controller');
const validator = require('../middlewares/validators/subscription');

routes.post('/submit', validator.submit, controller.submit);

module.exports = routes;
