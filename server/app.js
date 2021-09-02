const app = () => {
  // подключение express
  const express = require("express");

  const bodyParser = require('body-parser');

  const apiRoutes = require("./routes/index");

  // создаем объект приложения
  const app = express();
  const host = '127.0.0.1';
  const port = process.env.PORT || 7000;

  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

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
  app.listen(port, () => {
    console.log(`Server listens http://${host}:${port}`)
  });
};

module.exports = app;