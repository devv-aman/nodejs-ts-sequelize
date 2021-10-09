import { Router } from "express"
import authRoutes from "./auth"
import webRoutes from "./web"
import { authenticateClient } from "../middleware/auth"

import { ROUTES } from "../constants"

const apiV1Routes = Router()

apiV1Routes.use(ROUTES.AUTH.BASE, authenticateClient, authRoutes)
apiV1Routes.use(ROUTES.WEB.BASE, authenticateClient, webRoutes)

export default apiV1Routes
