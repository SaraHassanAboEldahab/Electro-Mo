import React, { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, logout } from "../../actions/userActions"
import { fetchAllProducts } from "../../actions/productActions"

const Navbar = ({ history, setShowCart, position }) => {

    const [keyword, setKeyword] = useState("")

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const { cartItems } = useSelector(state => state.cart)
    const { likeItems } = useSelector((state) => state.like)

    const [scrollHeight, setScrollHeight] = useState(0)

    const scrollRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollHeight(position);
            console.log(position)
        };
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

    const logoutHandler = () => {
        dispatch(logout())
    }
    const searchHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            history.push(`/search/${keyword}`)
        } else {
            history.push(`/`)
            setKeyword("")
        }
    }

    return (
        <div style={{ height: "fit-content", boxShadow: "1px 1px 5px 0px #dddddd" }}>
            <div className="container-fluid px-5 pb-2">

                {scrollHeight === 0 && <div className="row mx-0 pt-3 pb-2 d-lg-flex d-none">
                    <div className="col-lg-5 text-left pl-0">
                        <i className="fas fa-phone-alt text-info"> </i>
                        <span className="ml-1">(+800) 123 456 7890</span>
                        <i className="far fa-envelope ml-4 text-info"></i>
                        <span className="ml-1">sample@email.com</span>
                    </div>

                    <div className="col-lg-7 text-right pr-0">
                        <i className="fas fa-map-marker-alt"></i>
                        <span className="ml-1">Store Location</span>
                        <span className="mx-2">|</span>
                        <i className="fas fa-shipping-fast"></i>
                        <span className="ml-1">Track Your Order</span>

                        {!userInfo && <>
                            <span className="mx-2">|</span>
                            <Link to="/register" className="hover-color">
                                <i className="fas fa-user hover-color" style={{ color: "black" }}></i>
                                <span className="mx-2 hover-color" style={{ fontWeight: "400", color: "gray" }}>
                                    Register
                            </span>
                            </Link>
                        Or
                        <Link to="/login">
                                <span className="ml-1 hover-color" style={{ fontWeight: "400", color: "gray" }}>
                                    Sign In
                            </span>
                            </Link>
                        </>
                        }
                        <span className="mx-2">|</span>
                        <i className="fas fa-globe text-info" style={{ fontSize: "20px" }}></i>
                    </div>
                </div>
                }

                <nav className={scrollHeight > 0 ?
                    "navbar navbar-expand-lg navbar-light py-3 px-5 fixed-top active-scroll " :
                    "navbar navbar-expand-lg navbar-light px-0 py-3 "
                }>

                    <Link className="navbar-brand mr-md-5" to="/">
                        <h4>electroMo</h4>
                    </Link>

                    <form onSubmit={searchHandler} className="form-inline d-flex justify-content-center">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button className="btn btn-info py-2" type="submit" style={{ outline: "0" }}>
                            {" "}
                            <i className="fas fa-search text-light"></i>
                        </button>
                    </form>

                    <button className="navbar-toggler ml-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="d-lg-flex d-none mx-3 px-3 py-1 rounded-pill" style={{ border: "1px solid rgba(0,0,0,.125)", width: "215px" }}>
                        <small style={{ fontSize: "75%" }}>Remaining to Free Delivery</small>
                        <small className="mt-2" style={{ color: "blue", fontWeight: "bold" }}>$500.00</small>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ height: "50px" }}>
                        <ul className="navbar-nav ml-auto d-flex flex-column flex-lg-row">
                            {userInfo ?
                                <li className="nav-item dropdown">

                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        activeclassname="active"
                                    >
                                        {userInfo.name.toUpperCase()}
                                    </a>
                                    {!userInfo.isAdmin ?
                                        <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/profile"
                                                //onClick={() => dispatch(getUserDetails("profile"))}
                                                >
                                                    Profile
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/orders">
                                                    Orders
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul> :
                                        <ul className="dropdown-menu py-0" aria-labelledby="navbarDropdown">
                                            <li>
                                                <Link className="dropdown-item" to="/admin/userlist">
                                                    Users
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/productlist">
                                                    Products
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/admin/orderlist">
                                                    Orders
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item" to="/" onClick={logoutHandler}>
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
                                    }
                                </li> : <div className="d-flex  d-lg-none mt-4">
                                    <i className="fas fa-user" style={{ color: "black", fontSize: "24px" }}></i>
                                    <Link to="/register">
                                        <span className="mx-2 hover-color" style={{ fontWeight: "400", color: "black" }}>Register</span>
                                    </Link>
                                    <span>Or</span>
                                    <Link to="/login">
                                        <span className="ml-1 hover-color" style={{ fontWeight: "400", color: "black" }}>Sign In</span>
                                    </Link>
                                </div>
                            }
                            <li className="nav-item mr-lg-3 d-flex mb-2 ">
                                <Link className="nav-link p-0" style={{ marginTop: "12px" }} aria-current="page" to="/like">
                                    <i className="fas fa-heart" style={{ fontSize: "24px" }}></i>
                                </Link>
                                <span className="cart-items">
                                    {likeItems.length}
                                </span>
                            </li>
                            <li className="nav-item  d-flex">
                                <span className="nav-link p-0" style={{ marginTop: "12px" }} aria-current="page">
                                    <i
                                        className="fas fa-shopping-bag"
                                        onMouseEnter={() => setShowCart(true)}
                                        style={{ fontSize: "24px" }}
                                    >
                                    </i>
                                </span>
                                <span className="cart-items">
                                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                                </span>
                                <span style={{ marginTop: "10px" }} className="">
                                    ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
                                </span>
                            </li>
                            <li className=" d-flex d-lg-none mt-4">
                                <i className="fas fa-phone-alt mr-3" style={{ fontSize: "24px" }}> </i>
                                <span className="ml-2">Call</span>
                            </li>
                            <li className=" d-flex d-lg-none mt-3">
                                <i className="far fa-envelope mr-3" style={{ fontSize: "24px" }}></i>
                                <span className="ml-2">Contact</span>
                            </li>
                            <li className=" d-flex d-lg-none mt-3">
                                <i className="fas fa-globe mr-3" style={{ fontSize: "24px" }}></i>
                                <span className="ml-2">Store Info</span>
                            </li>
                            <li className=" d-flex d-lg-none mt-3">
                                <i className="fas fa-map-marker-alt mr-3" style={{ fontSize: "24px" }}></i>
                                <span className="ml-1">Direction</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                {scrollHeight === 0 && <ul className="d-flex scroll mt-3 px-2" style={{ width: "100%", overflowX: "scroll" }} >
                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Computers & Laptops" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fas fa-laptop  mr-3 mt-1"></i>
                            <span>Computers & Laptops</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Accessories" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fas fa-camera-retro  mr-3 mt-1"></i>
                            <span> Cameras</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Smartphones & Tablets" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fas fa-mobile-alt  mr-3 mt-1"></i>
                            <span>Smart Phones & Tablets</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Accessories" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fas fa-gamepad  mr-3 mt-1"></i>
                            <span>Gaming</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Accessories" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fab fa-youtube-square  mr-3 mt-1"></i>
                            <span>TV & Audio</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Computers & Laptops" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="far fa-keyboard mr-3 mt-1"></i>
                            <span>Keyboards</span>
                        </Link>
                    </li>

                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Accessories" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="fas fa-headphones-alt  mr-3 mt-1"></i>
                            <span>Headphones</span>
                        </Link>
                    </li>
                    <li className="d-flex ml-5 mb-2" style={{ minWidth: "fit-content", color: "gray" }}>
                        <Link to="/category/Accessories" style={{ fontWeight: "400", color: "gray" }}>
                            <i className="far fa-object-group  mr-3 mt-1"></i>
                            <span>Accessories</span>
                        </Link>
                    </li>
                </ul>
                }
            </div>
        </div >
    )
}

export default Navbar
