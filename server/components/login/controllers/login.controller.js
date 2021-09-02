class LoginController {
  getTest(req, res) {
    if(!req.body) return res.sendStatus(400);
    res.setHeader('Content-Type', 'application/json');
    return res.json({status: "GET Ok!"})
  }
  postTest(req, res) {
    if(!req.body) return res.sendStatus(400);
    res.setHeader('Content-Type', 'application/json');
    return res.json({status: "POST Ok!"})
  }
}

module.exports = new LoginController();