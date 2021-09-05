const Objects = require("./models/objects.model");
const objectController = require("./controllers/objects.controller");
const objectsRoutes = require("./routes/objects.route");

module.exports = {
  Objects,
  objectController,
  objectsRoutes
}