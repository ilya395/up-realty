const express = require("express");
const statusesController = require("../controllers/statuses.controller");

const statusesRoutes = express.Router();

statusesRoutes
  .route('/')
  .get(statusesController.getStatuses)

module.exports = statusesRoutes;