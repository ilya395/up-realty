const express = require("express");
const objectController = require("../controllers/objects.controller");

const objectsRoutes = express.Router();

objectsRoutes
  .route('/')
  .get(objectController.getObjects)
  .post(objectController.updateObject)
  .put(objectController.putObject)
  .delete(objectController.deleteObject)

module.exports = objectsRoutes;