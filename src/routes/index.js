require('express-async-errors');
const users = require ('../components/users/network');
const main = require ('../components/main/network');
const allRoutes = require('../utils/constants/routes.json')

const routes = (server) => {
    server.use (allRoutes.users, users);
    server.use (allRoutes.main, main);
}

module.exports = routes;