import React, { useState } from 'react'
import { NavLink, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, logout } from "../../actions/userActions"

const Navbar = ({ history }) => {
    const [keyword, setKeyword] = useState("")
    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const { cartItems } = useSelector(state => state.cart)

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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container">
                <button
                    className="navbar-toggler mr-0 mr-sm-5"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <NavLink className="navbar-brand mr-sm-5 active" activeclassname="active" to="/">Mo-Shop</NavLink>

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

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                            </li> :
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/register">
                                        <i className="fas fa-user-times mr-1"></i>
                                        Register
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeclassname="active" to="/login">
                                        <i className="fas fa-user-check mr-1"></i>
                                        Sign in
                                    </NavLink>
                                </li>
                            </>
                        }
                        <li className="nav-item d-flex">
                            <NavLink className="nav-link p-0" style={{ marginTop: "12px" }} activeClassName="active" aria-current="page" to="/cart">
                                <i className="fas fa-shopping-cart" style={{ fontSize: "20px" }}></i>
                            </NavLink>
                            {userInfo ?
                                <span className="cart-items">
                                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                                </span> :
                                <span className="cart-items">
                                    0
                                </span>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
