import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Button, Table } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { getMyOrderList } from "../../actions/orderActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"
const UserOrders = ({ match, history }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const myOrderList = useSelector(state => state.myOrderList)
    const { loading, orders, error } = myOrderList

    useEffect(() => {

        if (!userInfo) {
            history.push("/login")
        }
        dispatch(getMyOrderList())
    }, [dispatch, history, userInfo])

    return error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
        loading ? <Loader /> :
            <div className="container" >
                <h4 className="head mt-5">Your Orders</h4>
                <Table striped bordered hover responsive className="table-sm text-center" style={{ marginTop: "40px" }}>
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
                        {orders && orders.map(order => (
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
            </div>
}

export default UserOrders
