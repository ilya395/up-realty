const Statuses = require("../models/statuses.model");

class StatusesController {
  async getStatuses(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const statuses = await Statuses.findAll({raw:true});
      if (statuses) {
        return res.status(200).json({
          data: statuses,
          status: "OK"
        });
      }
      return res.status(404).json({
        data: [],
        status: "OK"
      });
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }
}

module.exports = new StatusesController();