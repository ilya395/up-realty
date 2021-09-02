const express = require("express");
const loginRoutes = require("../components/login/index");

const apiRoutes = express.Router();

apiRoutes
  .use("/login", loginRoutes)

module.exports = apiRoutes;