import express, { Router } from "express"
import rateLimit from "express-rate-limit"
import helmet from "helmet"

export const handleRateLimit = (router: Router): void => {
  const limit = rateLimit({
    max: 100, // limit each IP to 100 requests per windowMs
    windowMs: 30 * 60 * 1000, // 30 mins, the timeframe for which requests are checked/remembered.
    message: "Too many requests"
  })

  router.use(limit)
}

export const handleJSONBodyLimit = (router: Router): express.Router =>
  router.use(express.json({ limit: "10kb" }))

export const handleHTTPHeaders = (router: Router): express.Router =>
  router.use(helmet())
