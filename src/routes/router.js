const router = require('express').Router()
const productRouter = require("./product-route.js")

router.use("/products", productRouter);

module.exports = router;