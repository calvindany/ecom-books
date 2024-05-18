const express = require("express");

const routes = express.Router();

routes.use('/', (req, res, next) => {
    res.send("<p>This is shop page</p>");
});

module.exports = routes;