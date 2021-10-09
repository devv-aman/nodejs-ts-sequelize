import { Router } from "express"
import WebController from "../controllers/web"
import { ROUTES } from "../constants"

const webRoutes = Router()

webRoutes.get(
  ROUTES.WEB.ROUTES.DUMMY,
  WebController.DummyController.getDummyData()
)

export default webRoutes
