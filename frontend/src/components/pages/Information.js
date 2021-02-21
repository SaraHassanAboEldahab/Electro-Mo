import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../../actions/cartActions"
import CheckSteps from './CheckSteps'
import PlaceOrder from './PlaceOrder'

const Information = ({ history }) => {

    const cart = useSelector(state => state.cart)

    const { userInfo } = useSelector(state => state.userLogin)

    const [name, setName] = useState(userInfo.name)
    const [address, setAddress] = useState(cart.shippingAddress.address)
    const [city, setCity] = useState(cart.shippingAddress.city)
    const [postalCode, setPostalCode] = useState(cart.shippingAddress.postalCode)
    const [country, setCountry] = useState(cart.shippingAddress.country)
    const [governorate, setGovernorate] = useState(cart.shippingAddress.governorate)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ name, address, city, postalCode, governorate, country }))
        history.push("/shipping")
    }

    return (
        <div className="container">
            <CheckSteps step1 step2 />
            <div className="row mx-0 pt-3">
                <div className="col-lg-6 pt-4">
                    <span className="text-center" style={{
                        display: "inline-block",
                        position: "relative",
                        zIndex: "5",
                        backgroundColor: "white",
                        height: "25px",
                        width: "140px",
                        marginLeft: "37%"
                    }}>
                        Express Checkout
                    </span>
                    <div className="text-center py-3 mb-5" style={{ border: "solid 0.05rem rgb(199, 199, 199)", marginTop: "-10px", }}>
                        <button style={{ width: "60%" }} className="btn btn-dark">
                            Pay
                        </button>
                    </div>
                    <div class="form-group">
                        <input
                            className="general-input mb-3"
                            type="email"
                            value={userInfo.email}
                        />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck" />
                            <label class="form-check-label" for="gridCheck">
                                Keep me up to date on news and exclusive offers
                            </label>
                        </div>
                    </div>
                    <h4 className="head mt-5">Shipping Address</h4>
                    <hr className="mb-2" />
                    <div className="forms d-flex flex-column" >
                        <form onSubmit={(e) => submitHandler(e)} className="d-flex flex-column mt-2">
                            <input
                                className="general-input mb-3"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="First Name"
                            />
                            <input
                                className="general-input mb-3"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Address"
                            />
                            <input
                                className="general-input mb-3"
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                placeholder="City"
                            />
                            <div className="d-flex">
                                <input
                                    className="general-input mb-3"
                                    type="text"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    placeholder="Country"
                                    style={{ width: "32%", marginRight: "2%" }}
                                />
                                <input
                                    className="general-input mb-3"
                                    type="text"
                                    value={governorate}
                                    onChange={(e) => setGovernorate(e.target.value)}
                                    placeholder="Governorate"
                                    style={{ width: "49%", marginRight: "2%" }}
                                />
                                <input
                                    className="general-input mb-3"
                                    type="text"
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                    placeholder="Postal Code"
                                    style={{ width: "32%" }}
                                />
                            </div>
                            <div className="d-flex mt-3">
                                <Link className="mt-2" to="/cart">
                                    <i className="fas fa-chevron-left mr-2"></i>
                                Back To Cart
                                </Link>
                                <button className="btn btn-dark mt-1 ml-auto" type="submit">
                                    Continue
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-1 align-items-center or-section d-flex flex-md-column">
                    <span className="vertical"> </span>
                </div>
                <div className="col-lg-5 p-0">
                    <PlaceOrder shippingPrice="0" />
                </div>
            </div>
        </div>
    )
}

export default Information
