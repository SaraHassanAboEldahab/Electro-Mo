import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../actions/cartActions"
import { Link } from "react-router-dom"
import ErrorMessage from '../subComponents/ErrorMessage'


const CartScreen = ({ match, location, history }) => {

    const productId = match.params.id
    const qty = location.search ? Number(location.search.split("=")[1]) : 1
    const dispatch = useDispatch()
    const { cartItems } = useSelector((state) => state.cart)

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        history.push("/login?redirect=information")
    }
    return (
        <div className="container">
            <div className="row mx-0">
                <h3 className="my-4">Shopping Cart</h3>
                {cartItems.length === 0 ?
                    <h6 className="ml-auto mt-3 mb-0">
                        <ErrorMessage>Your Cart Is Empty</ErrorMessage>
                    </h6>
                    : (<>
                        <ul className="list-group list-group-flush">
                            {cartItems.map(item => (
                                <li key={item.product} className="list-group-item ">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <img src={item.image} alt={item.name} style={{ width: "80%" }} />
                                        </div>
                                        <div className="col-md-3 text-info d-flex align-items-center">
                                            <Link className="text-info mt-md-0 mt-4" to={`/product/${item.product}`} style={{ width: "90%" }}>
                                                {item.name}
                                            </Link>
                                        </div>
                                        <div className="col-md-2 d-flex justify-content-left justify-content-md-center align-items-center">
                                            <span className="mt-md-0 mt-3" style={{ fontWeight: "bold", color: "gray" }}>${item.price}</span>
                                        </div>
                                        <div className="col-md-2 justify-content-left justify-content-md-center d-flex align-items-center">
                                            <select
                                                style={{ width: "70%" }}
                                                className=" general-input mt-md-0 mt-3"
                                                aria-label="Default select example"
                                                value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-2 justify-content-left justify-content-md-center d-flex align-items-center">
                                            <button
                                                onClick={() => removeFromCartHandler(item.product)}
                                                className="btn btn-info my-md-0 my-3"
                                                type="button"
                                                style={{ height: "40px" }}
                                            >
                                                <i className="fas fa-trash"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>

                            ))}
                        </ul>
                    </>)
                }
            </div>
            <hr />
            <div className="row mx-0">
                <ul className="list-group list-group-flush" style={{ width: "100%" }}>
                    <li className="list-group-item" style={{ border: "none" }}>
                        <div></div>
                        <h5>Total Items : <span style={{ fontWeight: "bold", color: "gray" }}>{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span></h5>
                        <h5>Total price : <span style={{ fontWeight: "bold", color: "gray" }}>${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}</span> </h5>
                    </li>
                    <li className="list-group-item" style={{ border: "none" }}>
                        <Link
                            to="/information"
                            onClick={() => checkOutHandler}
                            className="btn btn-info"
                            disabled={cartItems.length === 0}
                            type="button"
                            style={{ height: "40px", width: "20%", fontWeight: "bold" }}
                        >
                            Check Out
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CartScreen
