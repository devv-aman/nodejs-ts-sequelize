import { Request, Response, NextFunction, Router } from "express"
import * as ErrorHandler from "../utils/ErrorHandler"
import { HTTP403Error } from "../utils/httpErrors"

const handle404Error = (router: Router): void => {
  router.use(() => {
    ErrorHandler.notFoundError()
  })
}

type ErrorWithCode = Error & { code?: string }

const handleClientError = (router: Router): void => {
  router.use(
    (err: ErrorWithCode, req: Request, res: Response, next: NextFunction) => {
      if (err.code == "EBADCSRFTOKEN") {
        err = new HTTP403Error()
      }
      ErrorHandler.clientError(err, req, res, next)
    }
  )
}

const handleServerError = (router: Router): void => {
  router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    ErrorHandler.serverError(err, req, res, next)
  })
}

export default [handle404Error, handleClientError, handleServerError]
