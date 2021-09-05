const express = require("express");
const { loginRoutes } = require("../components/login");
const { objectsRoutes } = require("../components/objects");

const apiRoutes = express.Router();

apiRoutes
  .use("/login", loginRoutes)
  .use("/objects", objectsRoutes)

module.exports = apiRoutes;