import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import ErrorMessage from '../subComponents/ErrorMessage'
import { saveTotalPrice } from "../../actions/cartActions"
const PlaceOrder = ({ shippingPrice }) => {

    const cart = useSelector((state) => state.cart)

    const totalPrice = ((cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)) + Number(shippingPrice)).toFixed(2)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(saveTotalPrice(totalPrice))
    }, [dispatch, totalPrice])

    return (
        <div>
            {cart.cartItems.length === 0 ?
                <h6 className="ml-auto mt-3 mb-0">
                    <ErrorMessage>Your Cart Is Empty</ErrorMessage>
                </h6>
                : (<>
                    <ul className="list-group list-group-flush">
                        {cart.cartItems.map(item => (
                            <li key={item.product} className="list-group-item ">
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

                        ))}
                        <li className="list-group-item ">
                            <div className="d-flex">
                                <h6>SubTotal</h6>
                                <span className="ml-auto span-styling">
                                    ${cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
                                </span>
                            </div>
                            <div className="d-flex mt-2">
                                <h6>Shipping</h6>
                                <span className="ml-auto span-styling">{shippingPrice}</span>
                            </div>
                        </li>
                        <li className="list-group-item d-flex">
                            <h5>Total</h5>
                            <h5 className="ml-auto span-styling">
                                ${cart.totalPrice}
                            </h5>
                        </li>
                    </ul>

                </>)
            }
        </div>
    )
}

export default PlaceOrder
