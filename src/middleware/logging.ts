import { Router } from "express"
import winston from "winston"
import expressWinston from "express-winston"
import Sentry from "winston-transport-sentry-node"
import settings from "../settings"

const handleLogging = (router: Router): Router =>
  router.use(
    expressWinston.logger({
      msg: "HTTP {{req.method}} {{req.url}}",
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console({ handleExceptions: true }),
        new Sentry({
          sentry: {
            dsn: settings.SENTRY.DSN
          },
          handleExceptions: true
        })
      ]
    })
  )

export { handleLogging }
