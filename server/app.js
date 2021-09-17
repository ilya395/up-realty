const express = require("express");

const fs = require( 'fs' );
const path = require( 'path' );

const bodyParser = require('body-parser');

const apiRoutes = require("./routes/index");
const { HOST, PORT, TOKEN_KEY } = require("./constants");
const jwt = require('jsonwebtoken');
const sequelize = require("./connectors/sequelize/sequelize.conector");
const { Users } = require("./components/users");

const React = require( "react" );
const ReactDOMServer = require( "react-dom/server" );
const App = require("../client/src/App").default;
const { StaticRouter } = require('react-router');

const staticJs = [];
const staticCss = [];



const app = () => {
  // создаем объект приложения
  const app = express();
  // const host = HOST;
  // const port = PORT;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.set("view engine", "hbs");
  app.set("views", "server/views"); // установка пути к представлениям

  // обслуживание статических ресурсов
  app.get( /\.(js|css|map|ico)$/, express.static( path.resolve( __dirname, '../client/dist' ) ) ); // spa
  // app.use("/static", express.static(path.resolve( __dirname, '../client/dist' ))); // spa + ssr

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

  // обслуживание статических ресурсов // !
  fs.readdirSync('./client/dist/assets/js').forEach(file => {
    if (file.split('.').pop() === 'js') {
      staticJs.push('/assets/js/' + file)
    }
  });
  fs.readdirSync('./client/dist/assets/css').forEach(file => {
    if (file.split('.').pop() === 'css') {
      staticCss.push('/assets/css/' + file)
    }
  })

  // app.use(
  //   cors({
  //     credentials: true,
  //     origin: ["http://localhost:4200"],
  //     optionsSuccessStatus: 200
  //   })
  // );

  app.use('/api', apiRoutes);

  app.use( '*', async ( req, res ) => {
    try {
      const context = {};

      const appComponent = await ReactDOMServer.renderToString(
        <StaticRouter
          location={req.url}
          context={context}
        >
          <App />
        </StaticRouter>
      );

      if (context.url) {
        // Somewhere a `<Redirect>` was rendered
        res.redirect(301, context.url);
        console.log(context.url)
      }

      // устанавливаем заголовок и статус
      res.contentType( 'text/html' );
      res.status( 200 );
      return await res.render('index.hbs', {
        string: appComponent,
        scripts: staticJs,
        styles: staticCss,
      });
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