const express = require("express");

const fs = require( 'fs' );
const path = require( 'path' );

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

  // обслуживание статических ресурсов
  app.get(
    /\.(js|css|map|ico)$/,
    express.static(
      // path.resolve( __dirname, '../client/dist' )
      `${__dirname}/../client/dist`
    )
  );

  // для проверки jwt
  app.use(async (req, res, next) => {

    const users = await Users.findAll({raw:true});

    if (req.headers.authorization) {
      return await jwt.verify(
        req.headers.authorization.split(' ')[1],
        TOKEN_KEY,
        async (err, payload) => {
          if (err) {
            await next()
          }
          else if (payload) {
            for (let user of users) {
              if (user.id === payload.id) {
                req.user = user
                await next()
              }
            }

            if (!req.user) {
              await next()
            }
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

  app.use( '*', ( req, res ) => {
    try {
      // читаем файл `index.html`
      let indexHTML = fs.readFileSync( path.resolve( __dirname, '../client/dist/index.html' ), {
        encoding: 'utf8',
      });
      // устанавливаем заголовок и статус
      res.contentType( 'text/html' );
      res.status( 200 );
      return res.send( indexHTML );
    } catch(e) {
      return res.status(404).json({
        massage: "Can't find static files",
        status: "NOT"
      });
    }
  });

  // синхронизация с бд, после успшной синхронизации запускаем сервер
  sequelize.sync().then(()=>{
    app.listen(PORT, () => {
      console.log(`Server listens http://${HOST}:${PORT}`)
    });
  }).catch(err=>console.log(err));

};

module.exports = app;