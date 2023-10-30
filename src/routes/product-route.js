import express from 'express'
import productController from "../controllers/product-controller.js"

const productRouter = express.Router()

productRouter.route('/').post((req, res) => productController.create(req, res))
productRouter.route('/').get((req, res) => productController.getAll(req, res))
productRouter.route('/:id').get((req, res) => productController.get(req, res))
productRouter.route('/:id').delete((req, res) => productController.delete(req, res))
productRouter.route('/:id').put((req, res) => productController.update(req, res))

export default productRouter