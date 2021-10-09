import dotenv from "dotenv"
dotenv.config()

import http from "http"
import "express-async-errors"
import logger from "./config/logger"
import express from "express"
import { initDependencies, checkDBConnection } from "./config/index"
import settings from "./settings"
import apiV1Routes from "./routes/routes"
import { applyMiddleware } from "./utils"
import middleware from "./middleware"
import errorHandlers from "./middleware/errorHandlers"
import { ROUTES } from "./constants"

process.on("uncaughtException", (err) => {
  logger.error({
    message: `uncaughtException`,
    extra: err
  })
  process.exit(1)
})

process.on("unhandledRejection", (err) => {
  logger.error({
    message: `unhandledRejection`,
    extra: err
  })
  process.exit(1)
})

const app = express()

applyMiddleware(middleware, app)
app.use(ROUTES.BASE, apiV1Routes)
applyMiddleware(errorHandlers, app)

const server = http.createServer(app)

const start = async () => {
  // await initDependencies()
  await checkDBConnection()

  server.listen(settings.APP_PORT, settings.APP_HOST, () => {
    logger.info({
      message: `Server is running on http://${settings.APP_HOST}:${settings.APP_PORT}`
    })
  })
}

start()
