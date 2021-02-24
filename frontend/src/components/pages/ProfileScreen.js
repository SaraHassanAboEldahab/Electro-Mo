import React, { useState, useEffect } from 'react'
import { Button, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails, updateUserProfile } from "../../actions/userActions"
import { getMyOrderList } from "../../actions/orderActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
const ProfileScreen = ({ history }) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    const myOrderList = useSelector(state => state.myOrderList)
    const { loading: loadingOrders, orders, error: errorOrders } = myOrderList
    useEffect(() => {
        if (!userInfo) {
            history.push("/login")
        } else {
            if (!user) {
                dispatch(getUserDetails("profile"))
                dispatch(getMyOrderList())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("Passwords do not match !!")
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }
    }

    return (
        <div className="container">
            <div className="row mx-0">
                <div className="col-lg-4">
                    <div className="forms" style={{ width: "85%" }}>
                        <h4 className="head">Your Profile</h4>
                        <hr className="mb-2" />

                        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
                        {loading && <Loader />}
                        {success && <ErrorMessage variant="success">Profile Updated</ErrorMessage>}

                        <form onSubmit={submitHandler} className="d-flex flex-column mt-2">
                            <label>Name</label>
                            <input
                                className="general-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label>Email Address</label>
                            <input
                                className="general-input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Password</label>
                            <input
                                className="general-input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Confirm Password</label>
                            <input
                                className="general-input"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            <button className="btn btn-info" type="submit">Update</button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-8" style={{ marginTop: "50px" }}>
                    <h4 className="head">Your Orders</h4>
                    <hr className="mb-2" />
                    {errorOrders ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                        loadingOrders ? <Loader /> :
                            <Table striped bordered hover responsive className="table-sm" style={{ marginTop: "40px" }}>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>DATE</th>
                                        <th>TOTAL</th>
                                        <th>PAID</th>
                                        <th>DELIVERED</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map(order => (
                                        <tr key={order._id}>
                                            <td>{order._id}</td>
                                            <td>{order.createdAt.substring(0, 10)}</td>
                                            <td>${order.totalPrice}</td>
                                            <td>
                                                {order.isPaid ?
                                                    order.paidAt.substring(0, 10) :
                                                    <i className="fas fa-times" style={{ color: "red" }}></i>
                                                }
                                            </td>

                                            <td>
                                                {order.isDelivered ?
                                                    order.deliveredAt.substring(0, 10) :
                                                    <i className="fas fa-times" style={{ color: "red" }}></i>
                                                }
                                            </td>
                                            <td>
                                                <LinkContainer to={`/order/${order._id}`}>
                                                    <Button className="btn-sm" variant="info">Details</Button>
                                                </LinkContainer>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
