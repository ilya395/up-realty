const { Users } = require("../../users");
const sequelize = require("../../../connectors/sequelize/sequelize.conector");
const { hash } = require("../../../utils");
const jwt = require('jsonwebtoken');
const { TOKEN_KEY } = require("../../../constants");
const { checkName, checkPassword } = require("../../../validate");

class LoginController {
  getTest(req, res) {
    if(!req.body) return res.sendStatus(400);
    res.setHeader('Content-Type', 'application/json');
    return res.json({status: "GET Ok!"})
  }
  async auth(req, res) {
    if(!req.body) return res.sendStatus(400);

    const { login, password } = req.body;
    if (checkName(login) && checkPassword(password)) {
      const users = await Users.findAll(); // sequelize.users.findAll();
      for (let user of users) {
        if (
          login === user.login &&
          hash(password) === user.password
        ) {
          return res.status(200).json({
            id: user.id,
            login: user.login,
            token: jwt.sign(
              { id: user.id },
              TOKEN_KEY,
              { expiresIn: '1800s' }
            ),
          })
        }

      }
    } else {
      return res.status(400).json({ message: 'Bad data' })
    }


    return res.status(404).json({ message: 'User not found' })
  }
}

module.exports = new LoginController();