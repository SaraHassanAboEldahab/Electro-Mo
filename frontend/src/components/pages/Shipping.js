import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingMethod } from "../../actions/cartActions"
import CheckSteps from './CheckSteps'
import PlaceOrder from './PlaceOrder'
const Shipping = ({ history }) => {

    const price = ["14.49", "32.90", "55.92"]

    const [checked, setChecked] = useState(false)
    const [shippingPrice, setShippingPrice] = useState("")

    const cart = useSelector(state => state.cart)

    const { userInfo } = useSelector(state => state.userLogin)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        history.push("/payment")
    }
    return (
        <div className="container">
            <CheckSteps step1 step2 step3 />
            <div className="row mx-0">
                <div className="col-lg-6">
                    <div className="p-4" style={{ border: "solid 0.05rem rgb(199, 199, 199)", marginTop: "30px" }}>
                        <div className="row">
                            <div className="col-3">
                                Contact :
                    </div>
                            <div className="col-6">
                                {userInfo.email}
                            </div>
                        </div>
                        <hr className="my-3" />
                        <div className="row">
                            <div className="col-3">
                                Ship To :
                        </div>
                            <div className="col-6">
                                {cart.shippingAddress.address} ,{cart.shippingAddress.country}                        </div>
                        </div>
                    </div>
                    <h5 className="mt-5 mb-2">Shipping Method</h5>
                    <form onSubmit={(e) => { submitHandler(e) }} className="d-flex flex-column mt-2" style={{ width: "100%" }}>
                        <div className="p-4" style={{ border: "solid 0.05rem rgb(199, 199, 199)", marginTop: "20px" }}>
                            <div className="d-flex">
                                <div className="form-check mb-4">
                                    <input
                                        className=" form-check-input"
                                        type="radio"
                                        value="USPS First Class Package International"
                                        name="shippingMethod"
                                        onChange={(e) => {
                                            dispatch(saveShippingMethod(e.target.value))
                                            setChecked(true)
                                            setShippingPrice(price[0])
                                        }}

                                    />
                                    <label className="form-check-label mt-0">
                                        USPS First Class Package International
                                    <br />
                                        <small>7 to 21 business days</small>
                                    </label>
                                </div>
                                <span className="ml-auto">${price[0]}</span>
                            </div>
                            <div className="d-flex">
                                <div className="form-check mb-4">
                                    <input
                                        className=" form-check-input"
                                        type="radio"
                                        value="DHL Express Worldwide"
                                        name="shippingMethod"
                                        onChange={(e) => {
                                            dispatch(saveShippingMethod(e.target.value))
                                            setChecked(true)
                                            setShippingPrice(price[1])
                                        }}
                                    />
                                    <label className="form-check-label mt-0">
                                        DHL Express Worldwide
                                        <br />
                                        <small>3 to 5 business days</small>
                                    </label>
                                </div>
                                <span className="ml-auto">${price[1]}</span>
                            </div>
                            <div className="d-flex">
                                <div className="form-check mb-3">
                                    <input
                                        className=" form-check-input"
                                        type="radio"
                                        value="USPS Priority Mail International"
                                        name="shippingMethod"
                                        id="PayPal"
                                        onChange={(e) => {
                                            dispatch(saveShippingMethod(e.target.value))
                                            setChecked(true)
                                            setShippingPrice(price[2])
                                        }}
                                    />
                                    <label className="form-check-label mt-0">
                                        USPS Priority Mail International
                                    <br />
                                        <small>6 to 10 business days</small>
                                    </label>
                                </div>
                                <span className="ml-auto">${price[2]}</span>
                            </div>
                        </div>
                        <div className="d-flex mt-3">
                            <Link className="mt-2" to="/information">
                                <i className="fas fa-chevron-left mr-2"></i>
                                Back To Information
                                </Link>
                            <button className="btn btn-dark mt-1 ml-auto"
                                type="submit"
                                disabled={!checked}
                            >
                                Continue
                                </button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-1 align-items-center or-section d-flex flex-md-column">
                    <span className="vertical"> </span>
                </div>
                <div className="col-lg-5">
                    <PlaceOrder shippingMethod={cart.shippingMethod} shippingPrice={shippingPrice} />
                </div>
            </div>
        </div >
    )
}

export default Shipping
