import { Router } from "express"
import UserAuthController from "../controllers/auth/user"
import { ROUTES } from "../constants"

const authRoutes = Router()

authRoutes.get(ROUTES.AUTH.ROUTES.INFO, UserAuthController.getUserInfo())

export default authRoutes
