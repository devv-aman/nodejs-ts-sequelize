import { Request, NextFunction, Application } from "express"
import { v4 as uuidv4 } from "uuid"
import settings from "../settings"
import * as Sentry from "@sentry/node"

export const setRequestId = (app: Application): void => {
  app.use((req: Request, _, next: NextFunction) => {
    req.requestId = uuidv4()
    if (settings.NODE_ENV !== "development") {
      Sentry.configureScope((scope) => {
        scope.setExtra("request_id", req.requestId)
      })
    }
    next()
  })
}
