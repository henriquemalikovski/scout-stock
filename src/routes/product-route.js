import express from 'express'
import productController from "../controllers/product-controller.js"
import authService from '../services/auth-service.js'

const productRouter = express.Router()

productRouter.post('/', authService.isAdmin, productController.create)
productRouter.get('/', authService.authorize, productController.getAll)
productRouter.get('/:id', authService.authorize, productController.get)
productRouter.delete('/:id', authService.isAdmin, productController.delete)
productRouter.put('/:id', authService.isAdmin, productController.update)

export default productRouter