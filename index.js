const express = require("express");
const app = express();
const mongoose = require("mongoose");
const logger = require("./utils/logger");

const PORT = 5000;

mongoose
  .connect("mongodb://127.0.0.0:27017/event-logger")
  .then(() => {
    console.log(`Database connected`);
    logger.error(`Database connected`);
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    logger.error(err.message);
  });
