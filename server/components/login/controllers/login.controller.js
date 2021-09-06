const { Users } = require("../../users");
const sequelize = require("../../../connectors/sequelize/sequelize.conector");
const { hash } = require("../../../utils");
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require("../../../constants");

class LoginController {
  getTest(req, res) {
    if(!req.body) return res.sendStatus(400);
    res.setHeader('Content-Type', 'application/json');
    return res.json({status: "GET Ok!"})
  }
  async auth(req, res) {
    if(!req.body) return res.sendStatus(400);
    // res.setHeader('Content-Type', 'application/json');
    // return res.json({status: "POST Ok!"})

    const users = await Users.findAll(); // sequelize.users.findAll();

    for (let user of users) {
      if (
        req.body.login === user.login &&
        hash(req.body.password) === user.password
      ) {
        return res.status(200).json({
          id: user.id,
          login: user.login,
          token: jwt.sign({ id: user.id }, TOKEN_KEY, { expiresIn: '1800s' }),
        })
      }
    }

    return res.status(404).json({ message: 'User not found' })
  }
}

module.exports = new LoginController();