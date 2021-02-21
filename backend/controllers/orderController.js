import asyncHandler from "express-async-handler"
import Order from "../models/order.js"


// @desc Create new order
// @route POST /api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        totalPrice,
        shippingMethod,
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(404)
        throw new Error("No order Items")
    } else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            shippingMethod,
            totalPrice,
            paymentMethod
        })
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})

// @desc Get order by id
// @route GET /api/orders
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate("user", "name email")

    if (order) {
        res.status(200).json(order)
    } else {
        res.status(404)
        throw new Error("Order not found")
    }
})


// @desc Get orders for logged in user
// @route GET /api/orders/myorders
// @access Private
const getMyOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.status(200).json(orders)
})

export { addOrderItems, getOrderById, getMyOrders }