const express = require("express");

const routes = express.Router();

routes.use('/', (req, res, next) => {
    res.send("<p>This is admin page</p>");
});

module.exports = routes;