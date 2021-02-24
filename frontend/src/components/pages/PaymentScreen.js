import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { savePaymentMethod } from "../../actions/cartActions"
import { createOrder, getOrderDetails } from "../../actions/orderActions"
import CheckSteps from './CheckSteps'
import ErrorMessage from "../subComponents/ErrorMessage"

const PaymentScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    //const { userInfo } = useSelector(state => state.userLogin)
    //const userDetails = useSelector(state => state.userDetails)

    if (!cart.shippingAddress) {
        history.push("/shipping")
    }
    const [paymentMethod, setPaymentMethod] = useState("PayPal")

    const dispatch = useDispatch()

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    useEffect(() => {
        dispatch(savePaymentMethod(paymentMethod))
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch(getOrderDetails(order._id))
        }
    }, [success, history])

    const placeOrderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            totalPrice: cart.totalPrice,
            shippingMethod: cart.shippingMethod,
        }))
    }

    return (
        <div className="container">
            <CheckSteps step1 step2 step3 step4 />
            <h4 className="head mt-5">Payment Method </h4>
            <hr className="mb-0" />
            <div className="forms d-flex flex-column ml-3 mt-5" >
                <form className="d-flex flex-column mt-2" style={{ width: "60%" }}>
                    <div className="form-check mb-3">
                        <input
                            className=" form-check-input"
                            type="radio"
                            value="PayPal"
                            name="paymentMethod"
                            id="PayPal"
                            checked
                            onChange={(e) => setPaymentMethod(e.target.value)}
                        />
                        <label className="form-check-label mt-0">PayPal Or Credit Card</label>
                    </div>
                    {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                    <button
                        className="btn btn-dark mt-2"
                        type="submit"
                        onClick={placeOrderHandler}
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PaymentScreen
