import { Request, Response, NextFunction } from "express"
import { HTTP400Error } from "../utils/httpErrors"
import { ERRORS } from "../constants"

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!req.query.q) {
    throw new HTTP400Error(ERRORS.MISSING_QUERY_PARAMS)
  } else {
    next()
  }
}
