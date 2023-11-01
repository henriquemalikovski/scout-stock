import authController from "../controllers/auth-controller.js";
import express from 'express'

const authRouter = express.Router()

authRouter.route('/').post((req, res) => authController.login(req, res))

export default authRouter