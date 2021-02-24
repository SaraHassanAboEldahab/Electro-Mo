import React, { useEffect } from 'react'
import { Button, Table, Row, Col } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getOrdersList, getOrderDetails } from "../../actions/orderActions"
import ErrorMessage from "../subComponents/ErrorMessage"
import Loader from "../subComponents/Loader"


const OrdersListScreen = ({ history, match }) => {

    const dispatch = useDispatch()

    const ordersList = useSelector(state => state.OrdersList)
    const { loading, orders, error } = ordersList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    //const { loading: loadingDelete, error: errorDelete, success: successDelete } = useSelector(state => state.productDelete)

    useEffect(() => {
        if (!userInfo && !userInfo.isAdmin) {
            history.push("/login")
        } else {
            dispatch(getOrdersList())
        }

    }, [dispatch, history, userInfo])


    return (
        <div className="container p-0">
            <Row className="align-items-center">
                <Col>
                    <h4 className="head">All Orders</h4>
                    <hr className="mb-2" />
                </Col>
            </Row>
            {error ? <ErrorMessage variant="danger">{error}</ErrorMessage> :
                loading ? <Loader /> :
                    <Table striped bordered hover responsive className="table-sm" style={{ marginTop: "40px" }}>
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">USER</th>
                                <th className="text-center">DATE</th>
                                <th className="text-center">TOTAL</th>
                                <th className="text-center">PAID</th>
                                <th className="text-center">DELIVERED</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order._id}>
                                    <td className="text-center">{order._id}</td>
                                    <td className="text-center">{order.user && order.user.name}</td>
                                    <td className="text-center">{order.createdAt.substring(0, 10)}</td>
                                    <td className="text-center">${order.totalPrice}</td>
                                    <td className="text-center">
                                        {order.isPaid ?
                                            order.paidAt.substring(0, 10) :
                                            <i className="fas fa-times" style={{ color: "red" }}></i>
                                        }
                                    </td>

                                    <td className="text-center">
                                        {order.isDelivered ?
                                            order.deliveredAt.substring(0, 10) :
                                            <i className="fas fa-times" style={{ color: "red" }}></i>
                                        }
                                    </td>
                                    <td className="text-center">
                                        <LinkContainer to={`/order/${order._id}`}>
                                            <Button
                                                className="btn-sm"
                                                variant="info"
                                                onClick={() => dispatch(getOrderDetails(order._id))}
                                            >
                                                Details
                                                </Button>
                                        </LinkContainer>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
            }
        </div>
    )
}

export default OrdersListScreen
