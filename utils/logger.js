const winston = require("winston");
// Requiring `winston-mongodb` will expose winston.transports.MongoDB`
require("winston-mongodb");

const logger = winston.createLogger({
  level: "info",
  transports: [
    new winston.transports.MongoDB({
      format: winston.format.simple(),
      level: "error",
      db: "mongodb://127.0.0.1:27017/event-logger",
      options: {
        useUnifiedTopology: true,
      },
      collection: "server_log",
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      ),
    }),
  ],
});

module.exports = logger;
