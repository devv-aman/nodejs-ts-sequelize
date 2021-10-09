import express from "express"
import { Application } from "express"
import cors from "cors"
import compression from "compression"
import cookieParser from "cookie-parser"

export const handleCors = (app: Application): void => {
  app.use(cors({ credentials: true, origin: true }))
}

export const handleBodyRequestParsing = (app: Application): void => {
  app.use(express.urlencoded({ extended: true }))
  app.use(express.json())
}

export const handleCompression = (app: Application): void => {
  app.use(compression())
}

export const handleCookie = (app: Application): void => {
  app.use(cookieParser())
}
