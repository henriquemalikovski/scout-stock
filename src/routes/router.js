import Router from 'express'
import productRouter from "./product-route.js"
import userRouter from "./user-route.js"
import authRouter from "./auth-route.js"
import routerCompany from './company-route.js'

const router = Router();

router.use("/products", productRouter);
router.use("/users", userRouter);
router.use("/auth", authRouter);
router.use("/companies", routerCompany);

router.use('/caf', (req, res) => {
    res.status(200).json({
        "total_docs": 250,
        "docs_5min": 55,
        "docs_10min": 20,
        "docs_15min": 15,
    });
})



export default router;