import { Response, NextFunction, Request } from "express"
import { HTTPClientError, HTTP404Error } from "../utils/httpErrors"
import logger from "../config/logger"
import accessEnv from "../helpers/accessEnv"
import { ERRORS } from "../constants"

export const notFoundError = (): void => {
  throw new HTTP404Error("Method not found.")
}

export const clientError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof HTTPClientError) {
    const { message, statusCode } = err
    logger.warn({
      message
    })
    res.status(statusCode).send(message)
  } else {
    next(err)
  }
}

export const serverError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (accessEnv("NODE_ENV") === "production") {
    res.status(500).send(ERRORS.INTERNAL_SERVER_ERROR)
  } else {
    res.status(500).send(err.stack)
  }
}
