const { Router: router } = require('express');

const subscriptionRoutes = require('./routes/subscription.routes');

const routes = router();

routes.use('/subscription', subscriptionRoutes);

module.exports = routes;
