import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

import db from "../sequelize/models"
import settings from "../settings"
import { HTTP401Error, HTTP403Error } from "../utils/httpErrors"

interface IJWTTokenData {
  user_uuid: string
}

const getAuthToken = (req: Request): string | undefined => {
  let token: string | undefined
  const authHeader = req.headers["authorization"] as string
  if (authHeader) {
    token = authHeader.split(" ")[1]
  }
  return token
}

export const authenticateClient = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = getAuthToken(req)
  if (!token) {
    throw new HTTP401Error()
  }

  try {
    const decoded = jwt.verify(
      token,
      settings.JWT.SECRET_KEY as string
    ) as IJWTTokenData
    const user = await db.User.findOne({
      where: {
        external_uuid: decoded.user_uuid as string
      }
    })
    if (user) {
      req.user = user
      next()
    } else {
      throw new HTTP403Error()
    }
  } catch (error) {
    throw new HTTP401Error()
  }
}
