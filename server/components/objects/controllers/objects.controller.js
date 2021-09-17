const Objects = require("../models/objects.model");
const { Statuses } = require("../../statuses");
const { checkNumbers } = require("../../../validate");

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
      if (checkNumbers(square) && checkNumbers(number) && checkNumbers(statusId)) {
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
      } else {
        return res
          .status(400)
          .json({ message: 'Bad data' });
      }
    }
    return res
      .status(401)
      .json({ message: 'Not authorized' });
  }

  async updateObject(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const { square, number, statusId, id } = req.body;
      if (checkNumbers(square) && checkNumbers(number) && checkNumbers(statusId)) {
        const data = {};
        square ? (data.square = +square) : false;
        number ? (data.number = +number) : false;
        statusId ? (data.status_id = +statusId) : false;
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
      } else {
        return res.status(400).json({
          massage: "Bad data",
          status: "NOT"
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

  async updateObject(req, res) {
    if (req.user) {
      if(!req.body) {
        return res.status(400).json({
          massage: "Something error",
          status: "NOT"
        });
      }
      const { square, number, statusId, id } = req.body;
      if (checkNumbers(+square) && checkNumbers(+number) && checkNumbers(+statusId) && checkNumbers(+id)) {
        const data = {};
        square ? (data.square = +square) : false;
        number ? (data.number = +number) : false;
        statusId ? (data.statusId = +statusId) : false;
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
        .status(400)
        .json({ message: 'Bad data' });
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
      if (checkNumbers(id)) {
        const object = await Objects.destroy({
          where: {
            id
          }
        });
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