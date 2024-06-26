import Products from '../models/product.js'
import companyController from './company-controller.js'

const productController = {
  create: async (req, res) => {
    const { name, description, amount, idCompany, cnpjCompany } = req.body
    if (!idCompany || !cnpjCompany) {
      res.status(400).json({ message: 'Company not found' })
      return
    }

    const product = {
      name,
      description,
      amount
    }
    try {
      const savedProduct = await Products.create(product)
      res.status(201).json(savedProduct)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  getAll: async (req, res) => {
    try {
      const products = await Products.find()
      res.status(200).json(products)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  get: async (req, res) => {
    try {
      const { id } = req.params
      const product = await Products.findById(id)
      if (!product) {
        res.status(404).json({ message: 'Product not found' })
        return
      }
      res.status(200).json(product)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  delete: async (req, res) => {
    const { id } = req.params
    try {
      const product = await Products.findById(id)
      if (!product) {
        res.status(404).json({ message: 'Product not found' })
        return
      }

      const deletedProduct = await Products.findByIdAndDelete(id)
      res.status(200).json(deletedProduct)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  },
  update: async (req, res) => {
    const { id } = req.params
    const { name, description, amount } = req.body
    const product = {
      name,
      description,
      amount
    }
    try {
      const updatedProduct = await Products.findByIdAndUpdate(id, product, { new: true })
      res.status(200).json(updatedProduct)
    } catch (error) {
      res.status(400).json({ message: error.message })
    }
  }
}

export default productController;