const Statuses = require("./models/statuses.model");
const statusesController = require("./controllers/statuses.controller");
const statusesRoutes = require("./routes/statuses.route");

module.exports = {
  Statuses,
  statusesController,
  statusesRoutes
}

