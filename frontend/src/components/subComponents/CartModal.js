import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToCart, removeFromCart } from "../../actions/cartActions"
import { Link } from "react-router-dom"
import ErrorMessage from '../subComponents/ErrorMessage'


const CartModal = ({ history, showCart, setShowCart }) => {

  const position = window.pageYOffset;

  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkOutHandler = () => {
    history.push("/information")
  }
  return (
    <div className="cart-modal"
      style={{ top: position > 0 ? "80px" : "125px" }}
      onMouseEnter={() => setShowCart(true)} >
      {cartItems.length === 0 ?
        <h6 className="ml-auto mt-3 mb-0">
          <ErrorMessage>Your Cart Is Empty</ErrorMessage>
        </h6>
        : (<>
          <ul className="list-group list-group-flush">
            {cartItems.map(item => (
              <li key={item.product} className="list-group-item ">
                <div className="row">
                  <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                    <img src={item.image} alt={item.name} style={{ width: "80%" }} />
                  </div>
                  <div className="col-7 d-flex flex-column align-items-left ">
                    <Link className="text-info mt-md-0" to={`/product/${item.product}`} style={{ width: "100%" }}>
                      {item.name}
                    </Link>
                    <span style={{ fontWeight: "bold", color: "gray" }}>QTY: {" "}{item.qty}</span>
                    <span className="mt-md-0 mt-3" style={{ fontWeight: "bold", color: "gray" }}>${item.price}</span>
                  </div>
                  <div className="col-2 text-center align-items-center">
                    <i
                      className="fas fa-times"
                      onClick={() => removeFromCartHandler(item.product)}
                      style={{ cursor: "pointer" }}
                    >
                    </i>
                  </div>
                </div>
              </li>

            ))}
          </ul>
        </>)
      }
      <hr className="mb-0" />
      <div className="row mx-0">
        <ul className="list-group list-group-flush" style={{ width: "100%" }}>
          <li className="list-group-item" style={{ border: "none" }}>
            <div className="d-flex">
              <h6>Total Items :</h6>
              <span style={{ fontWeight: "bold", color: "gray" }} className="ml-auto">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
            </div>
            <div className="d-flex">
              <h6>Total Price :</h6>
              <span style={{ fontWeight: "bold", color: "gray" }} className="ml-auto">
                ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
              </span>
            </div>
          </li>
          <li className="list-group-item d-flex" style={{ border: "none" }}>
            <Link
              to="/cart"
              onClick={() => checkOutHandler}
              className="btn btn-light"
              type="button"
              style={{ fontWeight: "bold" }}
            >
              Go To Cart
            </Link>
            <Link
              to="/information"
              onClick={() => checkOutHandler}
              className="btn btn-info ml-auto"
              disabled={cartItems.length === 0}
              type="button"
              style={{ fontWeight: "bold" }}
            >
              Check Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CartModal
