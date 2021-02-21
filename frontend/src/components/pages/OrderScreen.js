import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { getOrderDetails } from "../../actions/orderActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
const OrderScreen = ({ match }) => {

    const orderId = match.params.id
    const dispatch = useDispatch()
    const orderDetails = useSelector(state => state.orderDetails)
    const { loading, order, error } = orderDetails
    const { cartItems } = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [dispatch])

    return error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
        loading ? <Loader /> :
            <div className="container px-lg-0">
                <div className="row mx-0 pt-4">
                    <div className="col-lg-7">
                        <h5 className="head">Order:{" "} {orderId}</h5>
                        <hr />
                        <div>
                            <h4 className="mb-4">Shipping</h4>
                            <h6 className="span-styling">Name : {order.user.name}</h6>
                            <h6 className="span-styling">Email : {order.user.email}</h6>
                            <h6 className="span-styling">Address : {order.shippingAddress.address},
                        {order.shippingAddress.city},
                        {order.shippingAddress.country}
                            </h6>
                        </div>
                        <hr className="mt-3" />
                        <div>
                            <h4 className="mb-4">Payment Method</h4>
                            <h6 className="span-styling">Method : {order.paymentMethod}</h6>
                        </div>
                        <hr className="mt-3" />
                        <div>
                            {order.orderItems === 0 ? <ErrorMessage>No Order Items</ErrorMessage> :
                                <ul className="list-group list-group-flush">
                                    {order.orderItems.map((item, index) => (<>
                                        <li key={index} className="list-group-item ">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <span className="cart-items" style={{ color: "white", backgroundColor: "gray", left: "90%" }}>
                                                        {item.qty}
                                                    </span>
                                                    <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "10px" }} />
                                                </div>
                                                <div className="col-md-6 text-info d-flex align-items-center">
                                                    <Link className="text-info mt-md-0 mt-4" to={`/product/${item.product}`} style={{ width: "90%" }}>
                                                        {item.name}
                                                    </Link>
                                                </div>
                                                <div className="col-md-2 d-flex justify-content-left justify-content-md-center align-items-center">
                                                    <span className="mt-md-0 mt-3 span-styling">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                            </div>

                                        </li>
                                    </>))}
                                </ul>
                            }
                        </div>
                    </div>

                    <div className="col-lg-1 p-0 align-items-center or-section d-flex flex-md-column">
                        <span className="vertical"> </span>
                    </div>

                    <div className="col-lg-4 px-lg-0">
                        <ul className="list-group mt-5">
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                <h5>Order Summary</h5>
                            </li>
                            <li className=" list-group-item d-flex justify-content-between align-items-center">
                                Items
                          <span className="span-styling"> {cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center pr-1">
                                Shipping Method
                        <small className="span-styling" style={{ marginLeft: "50%" }}>{order.shippingMethod}</small>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                IsPaid
                        <span className="span-styling">No</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Is Delivered
                        <span className="span-styling">On Way</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Total Price
                        <span className="span-styling">{order.totalPrice}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
}

export default OrderScreen
