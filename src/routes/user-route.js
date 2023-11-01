import express from 'express'
import userController from "../controllers/user-controller.js"
import authService from '../services/auth-service.js'

const userRouter = express.Router()

userRouter.get("/", authService.authorize, userController.getAll)
userRouter.post('/', authService.isAdmin, userController.create)
userRouter.delete('/:id', authService.isAdmin, userController.delete)

export default userRouter