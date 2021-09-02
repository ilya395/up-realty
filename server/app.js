const express = require("express");

const bodyParser = require('body-parser');

const apiRoutes = require("./routes/index");
const { HOST, PORT, TOKEN_KEY } = require("./constants");
const jwt = require('jsonwebtoken');
const sequelize = require("./connectors/sequelize/sequelize.conector");
const { Users } = require("./components/users");

const app = () => {
  // создаем объект приложения
  const app = express();
  // const host = HOST;
  // const port = PORT;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // для проверки jwt
  app.use(async (req, res, next) => {
    const users = await Users.findAll({raw:true});

    if (req.headers.authorization) {
      await jwt.verify(
        req.headers.authorization.split(' ')[1],
        TOKEN_KEY,
        (err, payload) => {
          if (err) next()
          else if (payload) {
            for (let user of users) {
              if (user.id === payload.id) {
                req.user = user
                next()
              }
            }

            if (!req.user) next()
          }
        }
      );
    }

    await next();
  })

  // app.use(
  //   cors({
  //     credentials: true,
  //     origin: ["http://localhost:4200"],
  //     optionsSuccessStatus: 200
  //   })
  // );

  app.use('/api', apiRoutes);

  // определяем обработчик для маршрута "/"
  // app.get("/", function(request, response){
  //     // отправляем ответ
  //     response.send("<h2>Привет Express!</h2>");
  // });

  // начинаем прослушивать подключения на 3000 порту
  // app.listen(PORT, () => {
  //   console.log(`Server listens http://${HOST}:${PORT}`)
  // });

  // синхронизация с бд, после успшной синхронизации запускаем сервер
  sequelize.sync().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server listens http://${HOST}:${PORT}`)
    });
  }).catch(err=>console.log(err));

};

module.exports = app;