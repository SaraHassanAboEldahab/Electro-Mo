import express from "express"
const router = express.Router()
import { auth } from "../middleware/authMiddleware.js"

import { addOrderItems, getMyOrders, getOrderById } from "../controllers/orderController.js";

router.route("/").post(auth, addOrderItems)
router.route("/myorders").get(auth, getMyOrders)
router.route("/:id").get(auth, getOrderById)

export default router