const express = require("express");
const loginController = require("../controllers/login.controller");

const loginRoutes = express.Router();

loginRoutes
  .route('/')
  .get(loginController.getTest)
  .post(loginController.auth)

module.exports = loginRoutes;