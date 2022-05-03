require("dotenv").config();
const express = require("express");
const sequelize = require("./db.js");
const models = require("./models/models.js");
const router = require('./routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');
const path = require('path');
const cors = require("cors");
const fileUpload = require('express-fileupload');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);

// обработка ошибок
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log("WORKS"));
  } catch (err) {
    console.log(err);
  }
};

start();
