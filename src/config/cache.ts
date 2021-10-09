import redis from "redis"
import dotenv from "dotenv"
import logger from "./logger"
import accessEnv from "../helpers/accessEnv"
import { CONNECTIONS_LOG } from "../constants"

dotenv.config()

const REDIS_URL = accessEnv("REDIS_URL")

const redisClient = redis.createClient({
  url: REDIS_URL
})

const init = async (): Promise<unknown> =>
  new Promise((resolve, reject) => {
    redisClient.on("connect", () => {
      logger.info({
        message: CONNECTIONS_LOG.REDIS
      })
      resolve(redisClient)
    })

    redisClient.on("error", (error) => {
      reject(error)
    })
  })

export { init, redisClient }
