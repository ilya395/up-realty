const Objects = require("../models/objects.model");
const { Statuses } = require("../../statuses");

class ObjectsController {

  async getObjects(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const objects = await Objects.findAll({raw:true});
      const statuses = await Statuses.findAll({raw:true});

      if (objects.length > 0) {
        const data = objects.map(item => {
          const status = statuses.find(elem => +elem.id === +item.status_id);
          return {
            ...item,
            statusName: status ? status.name : null,
          }
        })
        return res.status(200).json({
          data: data,
          status: "OK"
        });
      }
      return res.status(404).json({ message: 'Not objects' })
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }

  getObject(req, res) {}

  async putObject(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const { square, number, statusId } = req.body;
      if (square && number && statusId) {
        const object = await Objects.create({
          square,
          number,
          status_id: statusId
        });
        if (object) {
          return res.status(200).json({
            data: object,
            status: "OK"
          });
        }
        return res.status(400).json({
          massage: "Can't create new object",
          status: "NOT"
        });
      }
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }

  async updateObject(req, res) {
    console.log(req.user)
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const { square, number, statusId, id } = req.body;
      const data = {};
      square ? (data.square = +square) : false;
      number ? (data.number = +number) : false;
      statusId ? (data.statusId = +statusId) : false;
      console.log(data)
      const object = await Objects.update({ ...data }, {
        where: {
          id: +id
        }
      });
      if (object) {
        return res.status(200).json({
          data: object,
          status: "OK"
        });
      }
      return res.status(400).json({
        massage: "Can't update this object",
        status: "NOT"
      });
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }

  async deleteObject(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const { id } = req.body;
      if (id) {
        const object = await Objects.destroy({
          where: {
            id
          }
        });
        console.log(object)
        if (object) {
          return res.status(200).json({
            data: object,
            status: "OK"
          });
        }
        return res.status(400).json({
          massage: "Can't delete this object",
          status: "NOT"
        });
      }
      return res.status(400).json({
        massage: "Can't delete object without correct data",
        status: "NOT"
      });
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }
}

module.exports = new ObjectsController();