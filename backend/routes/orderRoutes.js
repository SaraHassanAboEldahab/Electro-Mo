import express from "express"
const router = express.Router()
import { auth, admin } from "../middleware/authMiddleware.js"

import { addOrderItems, getMyOrders, getOrderById, updateOrderToPaid, getOrders, updateOrderToDelivered } from "../controllers/orderController.js";

router.route("/").post(auth, addOrderItems).get(auth, admin, getOrders)
router.route("/myorders").get(auth, getMyOrders)
router.route("/:id").get(auth, getOrderById)
router.route("/:id/pay").put(auth, updateOrderToPaid)
router.route("/:id/deliver").put(auth, admin, updateOrderToDelivered)


export default router