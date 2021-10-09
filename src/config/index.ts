import { init as initCache } from "./cache"
import db from "../sequelize/models"
import logger from "./logger"
import { CONNECTIONS_LOG } from "../constants"

const initDependencies = async (): Promise<void> => {
  await initCache()
}

const checkDBConnection = async (): Promise<void> => {
  await new Promise((resolve, reject) => {
    db.sequelize
      .authenticate()
      .then(() => {
        logger.info({
          message: CONNECTIONS_LOG.DB_CONNECTED
        })
        resolve(db)
      })
      .catch((err: any) => {
        logger.error({
          message: CONNECTIONS_LOG.DB_CONNECTION_ERROR,
          extra: err
        })
        reject(err)
      })
  })
}

export { initDependencies, checkDBConnection }
