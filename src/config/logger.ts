import winston from "winston"
import Sentry from "winston-transport-sentry-node"
import settings from "../settings"

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: "info",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    new winston.transports.Console({ handleExceptions: true }),
    new Sentry({
      sentry: {
        dsn: settings.SENTRY.DSN
      },
      handleExceptions: true
    })
  ]
})

export default logger
