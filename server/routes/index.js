const express = require("express");
const { loginRoutes } = require("../components/login");
const { objectsRoutes } = require("../components/objects");
const { statusesRoutes } = require("../components/statuses");

const apiRoutes = express.Router();

apiRoutes
  .use("/login", loginRoutes)
  .use("/objects", objectsRoutes)
  .use("/statises", statusesRoutes)

module.exports = apiRoutes;