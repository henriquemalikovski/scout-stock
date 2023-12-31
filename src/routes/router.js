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

export default router;